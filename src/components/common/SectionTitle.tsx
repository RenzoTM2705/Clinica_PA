interface Props {
    title: string;
    subtitle?: string;
    center?: boolean;
}

/**
 * Título reutilizable para secciones.
 */
const SectionTitle = ({
    title,
    subtitle,
    center = false
}: Props) => {
    return (
        <div
            className={`flex flex-col gap-2 ${center ? "items-center text-center" : ""
                }`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003f87]">
                {title}
            </h2>

            {subtitle && (
                <p className="text-gray-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;