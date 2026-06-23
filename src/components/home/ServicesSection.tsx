import type { FC } from "react";

import { services } from "../../data/services";

import ServiceCard from "../common/ServiceCard";

import SectionTitle from "../common/SectionTitle";

/**
 * Sección de especialidades médicas.
 */
const ServicesSection: FC = () => {
    return (
        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    title="Nuestros Servicios"
                    subtitle="Especialidades diseñadas para tu cuidado integral"
                />

                <div
                    className="
            mt-12
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
                >
                    {services.map((service) => (
                        <ServiceCard
                            icon={service.icon}
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default ServicesSection;