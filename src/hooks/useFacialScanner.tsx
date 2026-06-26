import { useEffect, useRef, useState } from "react";

export const useFacialScanner = () => {
    
    const videoRef = useRef<HTMLVideoElement>(null);

    const wsRef = useRef<WebSocket | null>(null);

    const intervalRef = useRef<number | null>(null);

    const [isRecording, setIsRecording] = useState(false);

    const [recognized, setRecognized] = useState(false);

    const [message, setMessage] = useState("");

    const [snapshot, setSnapshot] = useState<string | null>(null);

    const [doctorName, setDoctorName] = useState<string>("");

    const initializeCamera = async () => {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 640,
                height: 480,
                facingMode: "user",
            },
            audio: false,
        });

        if (!videoRef.current) return;

        videoRef.current.srcObject = stream;

        await videoRef.current.play();
    };

    const stopCamera = () => {

        const stream =
            videoRef.current?.srcObject as MediaStream | null;

        stream?.getTracks().forEach(t => t.stop());

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    };

    const captureFrame = () => {

        const video = videoRef.current;
        const ws = wsRef.current;

        if (!video || !ws) return;
        if (ws.readyState !== WebSocket.OPEN) return;

        const w = video.videoWidth;
        const h = video.videoHeight;

        if (!w || !h) return;

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(video, 0, 0, w, h);

        canvas.toBlob((blob) => {

            if (!blob) return;

            const reader = new FileReader();

            reader.onloadend = () => {

                const base64 = (reader.result as string).split(",")[1];

                ws.send(base64);
            };

            reader.readAsDataURL(blob);

        }, "image/jpeg", 0.6);
    };

    const startRecognition = async () => {

        await initializeCamera();

        const ws = new WebSocket("ws://127.0.0.1:8000/ws/facial");

        wsRef.current = ws;

        ws.onopen = () => {

            setIsRecording(true);

            intervalRef.current = window.setInterval(() => {
                captureFrame();
            }, 200);
        };

        ws.onmessage = (event) => {

            const data = JSON.parse(event.data);

            if (data.status === "success" || data.status === "doctor") {

                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }

                setDoctorName(data.name);
                setMessage(data.message);
                setRecognized(true);

                const video = videoRef.current;

                if (video) {
                    const canvas = document.createElement("canvas");
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;

                    const ctx = canvas.getContext("2d");
                    if (ctx) {
                        ctx.drawImage(video, 0, 0);
                        setSnapshot(canvas.toDataURL("image/jpeg"));
                    }
                }

                stopCamera();
                ws.close();
                setIsRecording(false);
            }

            if (data.status === "failed") {

                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }

                setMessage(data.message);
                setIsRecording(false);
            }
        };

        ws.onerror = () => {
            setIsRecording(false);
        };
    };

    useEffect(() => {

        startRecognition();

        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            wsRef.current?.close();
            stopCamera();
        };

    }, []);

    return {
        videoRef,
        isRecording,
        recognized,
        message,
        snapshot,
        doctorName
    };
};