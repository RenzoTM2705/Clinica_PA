import { useEffect, useRef, useState } from "react";

export const useFacialScanner = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("Listo para escanear");
    const [cameraAccess, setCameraAccess] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        requestCameraAccess();

        return () => {
            streamRef.current?.getTracks().forEach(track => track.stop());
        };
    }, []);

    const requestCameraAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user",
                },
            });

            streamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            setCameraAccess(true);
            setStatus("Cámara activa");
        } catch {
            setStatus("No se pudo acceder a la cámara");
        }
    };

    const startRecording = () => {
        setIsRecording(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsRecording(false);
                    setStatus("Rostro registrado correctamente");
                    return 100;
                }

                return prev + 2;
            });
        }, 80);
    };

    return {
        videoRef,
        isRecording,
        progress,
        status,
        cameraAccess,
        startRecording,
    };
};