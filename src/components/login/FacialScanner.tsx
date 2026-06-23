import type { RefObject } from "react";

interface Props {
    videoRef: RefObject<HTMLVideoElement | null>;
    cameraAccess: boolean;
    isRecording: boolean;
}

const FacialScanner = ({
    videoRef,
    cameraAccess,
    isRecording,
}: Props) => {
    return (
        <div className="flex justify-center">
            <div
                className="
                relative
                w-80
                h-80
                rounded-full
                overflow-hidden
                border-4
                border-[#003f87]
            "
            >
                {cameraAccess && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                )}

                {isRecording && (
                    <div
                        className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1
                        bg-blue-500
                        animate-scan
                    "
                    />
                )}
            </div>
        </div>
    );
};

export default FacialScanner;