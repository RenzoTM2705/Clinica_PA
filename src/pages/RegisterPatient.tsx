import { useLocation } from "react-router-dom";
import { useState } from "react";

const RegisterPatient = () => {

    const location = useLocation();

    const snapshot =
        location.state?.snapshot;

    const [nombre, setNombre] =
        useState("");

    const [telefono, setTelefono] =
        useState("");

    const register = async () => {

        const response = await fetch(
            "http://localhost:8000/patients/register",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    nombre_completo:
                        nombre,
                    telefono:
                        telefono,
                    image_base64:
                        snapshot
                })
            }
        );

        const data =
            await response.json();

        console.log(data);

        window.location.href =
            "/webrtc";
    };

    return (
        <div
            className="
                p-10
                max-w-md
                mx-auto
                flex
                flex-col
                gap-4
            "
        >
            <h1
                className="
                    text-2xl
                    font-bold
                "
            >
                Registro Paciente
            </h1>

            <input
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) =>
                    setNombre(
                        e.target.value
                    )
                }
                className="
                    border
                    p-3
                "
            />

            <input
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) =>
                    setTelefono(
                        e.target.value
                    )
                }
                className="
                    border
                    p-3
                "
            />

            <button
                onClick={register}
                className="
                    bg-blue-600
                    text-white
                    p-3
                "
            >
                Registrar
            </button>
        </div>
    );
};

export default RegisterPatient;