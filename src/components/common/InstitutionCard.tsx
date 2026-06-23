interface Props {
    title: string;
    content: string;
    dark?: boolean;
}

/**
 * Tarjeta institucional reutilizable.
 */
const InstitutionCard = ({
    title,
    content,
    dark
}: Props) => {
    return (
        <article
            className={`
        rounded-xl
        p-10
        border
        ${dark
                    ? "bg-[#003f87] text-white"
                    : "bg-white"
                }
      `}
        >
            <h3 className="text-2xl font-semibold mb-4">
                {title}
            </h3>

            <p>{content}</p>
        </article>
    );
};

export default InstitutionCard;