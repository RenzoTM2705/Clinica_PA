interface Props {
    isRecording: boolean;
    onClick: () => void;
}

const RecordButton = ({
    isRecording,
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
                disabled:opacity-70
                disabled:cursor-not-allowed
            "
        >
            {isRecording
                ? "Reconociendo rostro..."
                : "Iniciar reconocimiento"}
        </button>
    );
};

export default RecordButton;