/**
 * Banner principal.
 */
import fondoClinica from "../../assets/images/fondo-clinica.webp";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0,0,0,.55),
                            rgba(0,0,0,.35)
                        ),
                        url(${fondoClinica})
                    `
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">

                <div className="max-w-2xl">

                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        Tu salud es

                        <span className="block text-[#80f98b]">
                            nuestra prioridad
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-white/90">
                        Combinamos tecnología de vanguardia con
                        atención médica personalizada.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default HeroSection;