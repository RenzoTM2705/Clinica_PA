import FeatureItem from "../common/FeatureItem";
import SectionTitle from "../common/SectionTitle";
import imagenpagina from "../../assets/images/imagen-pagina-1.webp";
import { features } from "../../data/features";

/**
 * Sección de beneficios institucionales.
 * Muestra las razones principales para elegir la clínica.
 */
const WhyChooseUsSection = () => {
    return (
        <section className="w-full py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Imagen */}
                    <div className="relative">
                        <img
                            src={imagenpagina}
                            alt="Equipo médico"
                            className="
                w-full
                h-[500px]
                object-cover
                rounded-3xl
                shadow-xl
              "
                        />

                        {/* Badge */}
                        <div
                            className="
                absolute
                bottom-6
                right-6
                bg-green-700
                text-white
                p-6
                rounded-2xl
                shadow-lg
              "
                        >
                            <h3 className="text-3xl font-bold">
                                24/7
                            </h3>

                            <p className="text-sm">
                                Atención de Emergencias
                            </p>
                        </div>
                    </div>

                    {/* Información */}
                    <div>
                        <SectionTitle
                            title="¿Por qué elegir Salud Integral?"
                            subtitle="Entendemos que la salud no puede esperar. Por eso optimizamos cada proceso para brindarte una atención rápida, segura y humana."
                        />

                        <div className="grid md:grid-cols-2 gap-8 mt-10">
                            {features.map((feature) => (
                                <FeatureItem
                                    key={feature.title}
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;