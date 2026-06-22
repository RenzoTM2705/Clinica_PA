import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[80px] flex justify-center bg-[#fff] border-b border-[#c2c6d4] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] z-[230]">
            <div className="max-w-7xl w-full px-[40px] flex justify-between items-center">
                {/* Logo con Link a Inicio */}
                <Link to="/" className="flex gap-[8px] items-center">
                    <div className="w-[133.33px] h-[40px] bg-[url(https://static.codia.ai/image/2026-06-22/tJLAnw9wFt.png)] bg-cover bg-no-repeat overflow-hidden" />
                </Link>
                {/* Botón Ingresar con navegación */}
                <div 
                    onClick={handleLoginClick}
                    className="flex px-[32px] py-[8px] bg-[#003f87] rounded-full cursor-pointer hover:bg-[#002a5e] transition-colors"
                >
                    <span className="text-[16px] font-normal leading-[24px] text-[#fff]">Ingresar</span>
                </div>
            </div>
        </header>
    );
};