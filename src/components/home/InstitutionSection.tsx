import SectionTitle from "../common/SectionTitle";
import InstitutionCard from "../common/InstitutionCard";

/**
 * Información institucional.
 */
const InstitutionSection = () => {
    return (
        <section className="bg-slate-50 rounded-3xl py-20">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    title="Nuestra Institución"
                    center
                />

                <div className="grid md:grid-cols-2 gap-6 mt-16">

                    <InstitutionCard
                        title="Historia"
                        content="Salud Integral nació en el año 2005 con el propósito de brindar atención médica accesible, humana y de calidad para toda la comunidad. Lo que comenzó como un pequeño centro de atención primaria fue creciendo gracias a la confianza de nuestros pacientes y al compromiso constante de nuestro equipo de profesionales.
A lo largo de los años, hemos incorporado nuevas especialidades médicas, tecnología de diagnóstico avanzada y procesos orientados a mejorar la experiencia de cada persona que nos visita. Hoy, Salud Integral es una institución comprometida con la prevención, el diagnóstico oportuno y el tratamiento eficaz, manteniendo siempre un enfoque centrado en el bienestar de nuestros pacientes y sus familias."
                    />

                    <InstitutionCard
                        title="Misión"
                        content="Brindar servicios de salud integrales mediante una atención médica segura, ética y personalizada, respaldada por profesionales altamente capacitados y tecnología moderna, contribuyendo al bienestar y la calidad de vida de nuestros pacientes."
                        dark
                    />

                </div>

            </div>

        </section>
    );
};

export default InstitutionSection;