import type { FC } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

/**
 * Tarjeta de servicio médico.
 */
const ServiceCard: FC<ServiceCardProps> = ({
    icon,
    title,
    description
}) => {
    return (
        <article
            className="
        bg-white
        border
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
        >
            <div
                className="
        w-12
        h-12
        bg-blue-100
        rounded-lg
        mb-4
        flex
        items-center
        justify-center
    "
            >
                <img
                    src={icon}
                    alt={title}
                    className="w-5 h-5 object-contain"
                />
            </div>

            <h3
                className="
          text-xl
          font-semibold
          text-[#003f87]
        "
            >
                {title}
            </h3>

            <p className="text-gray-600 mt-2">
                {description}
            </p>
        </article>
    );
};

export default ServiceCard;