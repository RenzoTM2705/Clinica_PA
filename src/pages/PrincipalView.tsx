import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import InstitutionSection from "../components/home/InstitutionSection";
import ServicesSection from "../components/home/ServicesSection";

import FloatingButton from "../components/common/FloatingButton";

/**
 * Página principal del sistema.
 *
 * Se compone de:
 * - Hero Banner
 * - Beneficios
 * - Institución
 * - Servicios
 * - Footer
 */
const PrincipalView = () => {
    return (
        <div
            className="
        min-h-screen
        bg-[#f8fafc]
        flex
        flex-col
      "
        >
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <main className="flex-1">
                <HeroSection />

                <WhyChooseUsSection />

                <InstitutionSection />

                <ServicesSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Botón flotante */}
            <FloatingButton />
        </div>
    );
};

export default PrincipalView;