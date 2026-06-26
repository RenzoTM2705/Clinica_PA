import type { RefObject } from "react";

interface Props {
    videoRef: RefObject<HTMLVideoElement | null>;
    isRecording: boolean;
    snapshot: string | null;
}

const FacialScanner = ({
    videoRef,
    isRecording,
    snapshot,
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
                    bg-black
                "
            >

                {snapshot ? (

                    <img
                        src={snapshot}
                        alt="Snapshot"
                        className="
                            w-full
                            h-full
                            object-cover
                        "
                    />

                ) : (

                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="
                            w-full
                            h-full
                            object-cover
                        "
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