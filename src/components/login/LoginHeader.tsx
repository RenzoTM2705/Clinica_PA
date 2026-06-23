import { Link } from "react-router-dom";

interface Props {
    status: string;
}

const LoginHeader = ({ status }: Props) => {
    return (
        <>
            <Link
                to="/"
                className="absolute top-4 left-4 text-[#003f87] text-3xl"
            >
                ←
            </Link>

            <div className="text-center">
                <h1 className="text-3xl font-bold text-[#003f87]">
                    Acceso Biométrico
                </h1>

                <p className="text-slate-600 mt-2">
                    {status}
                </p>
            </div>
        </>
    );
};

export default LoginHeader;