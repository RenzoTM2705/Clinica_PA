import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo-clinica-cut.png";
/**
 * Barra de navegación principal.
 * Visible en todas las páginas públicas.
 */
const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <header
            className="
        fixed
        top-0
        left-0
        w-full
        h-20
        bg-white
        border-b
        border-slate-200
        shadow-sm
        z-50
      "
        >
            <div
                className="
          max-w-7xl
          h-full
          mx-auto
          px-4
          md:px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
            >
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <img
                        src={logo}
                        alt="Salud Integral"
                        className="h-16
                                    w-auto
                                    object-contain"
                    />
                    <span
                        className="
                                    text-[#003f87]
                                    font-bold
                                    text-lg
                                    md:text-xl
                                    lg:text-2xl
                                "
                    >
                        Salud Integral
                    </span>
                </Link>



                {/* Botón Login */}
                <button
                    onClick={handleLoginClick}
                    className="
            bg-[#003f87]
            text-white
            px-6
            py-2
            rounded-full
            hover:bg-[#002e63]
            transition-colors
            hover:cursor-pointer
          "
                >
                    Ingresar
                </button>
            </div>
        </header>
    );
};

export default Navbar;