import type { Service } from "../types/service.types";
import medicineIcon from "../assets/icons/medicine.png";
import heartIcon from "../assets/icons/cardiogram.png";
import kidsIcon from "../assets/icons/kids.png";
import kneeIcon from "../assets/icons/knee.png";
/**
 * Especialidades médicas.
 */
export const services: Service[] = [
    {
        icon: medicineIcon,
        title: "Medicina General",
        description:
            "Atención primaria integral para todas las edades."
    },
    {
        icon: heartIcon,
        title: "Cardiología",
        description:
            "Cuidado experto para la salud del corazón."
    },
    {
        icon: kidsIcon,
        title: "Pediatría",
        description:
            "Atención especializada para niños."
    },
    {
        icon: kneeIcon,
        title: "Traumatología",
        description:
            "Diagnóstico y tratamiento osteomuscular."
    }
];