interface Props {
    isRecording: boolean;
    progress: number;
    onClick: () => void;
}

const RecordButton = ({
    isRecording,
    progress,
    onClick,
}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={isRecording}
            className="
                w-full
                py-4
                rounded-lg
                bg-[#003f87]
                text-white
                font-semibold
                hover:cursor-pointer
            "
        >
            {isRecording
                ? "Grabando..."
                : progress === 100
                    ? "Rostro Registrado"
                    : "Grabar Rostro"}
        </button>
    );
};

export default RecordButton;