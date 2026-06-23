interface Props {
    progress: number;
    isRecording: boolean;
}

const ProgressSection = ({
    progress,
    isRecording,
}: Props) => {
    return (
        <div className="w-full">
            <div className="flex justify-between mb-2">
                <span>
                    {isRecording
                        ? "Grabando..."
                        : "Progreso"}
                </span>

                <span>{progress}%</span>
            </div>

            <div className="h-2 bg-slate-200 rounded-full">
                <div
                    className="
                        h-full
                        bg-[#003f87]
                        rounded-full
                        transition-all
                    "
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressSection;