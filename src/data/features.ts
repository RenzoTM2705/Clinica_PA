import type { Feature } from "../types/feature.types";
import doctorIcon from "../assets/icons/doctor.png";
import flashIcon from "../assets/icons/flash.png";
import historyIcon from "../assets/icons/history.png";
import stethoscopeIcon from "../assets/icons/stethoscope.png";
/**
 * Características institucionales.
 */
export const features: Feature[] = [
    {
        icon: flashIcon,
        title: "Atención rápida",
        description:
            "Tiempos de espera mínimos y procesos ágiles."
    },
    {
        icon: doctorIcon,
        title: "Profesionales certificados",
        description:
            "Especialistas con trayectoria internacional."
    },
    {
        icon: stethoscopeIcon,
        title: "Tecnología de punta",
        description:
            "Equipamiento médico de última generación."
    },
    {
        icon: historyIcon,
        title: "Historial digital",
        description:
            "Acceso seguro a tus registros desde cualquier lugar."
    }
];