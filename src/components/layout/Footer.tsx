import React from 'react';

export const Footer: React.FC = () => {
    const quickLinks: string[] = ['Privacidad', 'Términos de Uso', 'Portal del Paciente', 'Citas Online'];

    return (
        <footer className="w-full bg-[#e6eff8] border-t border-[#c2c6d4]">
            <div className="max-w-7xl mx-auto px-[40px] py-[64px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    {/* Columna 1: Brand */}
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex gap-[8px] items-center">
                            <span className="text-[20px] font-bold leading-[28px] text-[#141d23]">Salud Integral</span>
                        </div>
                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">
                            Comprometidos con la excelencia
                            <br />
                            médica y el cuidado integral de la salud
                            <br />
                            en cada etapa de la vida.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="flex flex-col gap-[16px]">
                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Enlaces Rápidos</span>
                        <div className="flex flex-col gap-[8px]">
                            {quickLinks.map((link, index) => (
                                <span 
                                    key={index}
                                    className="text-[14px] font-normal leading-[20px] text-[#424752]"
                                >
                                    {link}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="flex flex-col gap-[16px]">
                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Contacto</span>
                        <div className="flex flex-col gap-[7.5px]">
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[10.5px] h-[10.5px] bg-[url(https://static.codia.ai/image/2026-06-22/HO4q842Png.png)] bg-cover bg-no-repeat" />
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752]">+1 (234) 567-890</span>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[11.667px] h-[9.333px] bg-[url(https://static.codia.ai/image/2026-06-22/wC1zK4BYR8.png)] bg-cover bg-no-repeat" />
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752]">contacto@saludintegral.com</span>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[9.333px] h-[11.667px] bg-[url(https://static.codia.ai/image/2026-06-22/HYtUX63foA.png)] bg-cover bg-no-repeat" />
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752]">Av. Salud 456, Centro Médico</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Newsletter */}
                    <div className="flex flex-col gap-[16px]">
                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Newsletter</span>
                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">
                            Suscríbete para recibir consejos de
                            <br />
                            salud.
                        </p>
                        <div className="flex h-[40px]">
                            <input 
                                type="email" 
                                placeholder="Tu email"
                                className="flex-1 px-[16px] py-[10px] bg-[#fff] rounded-l-[8px] border border-[#c2c6d4] text-[14px] text-[#6b7280] outline-none focus:border-[#003f87]"
                            />
                            <button className="px-[16px] py-[8px] bg-[#003f87] rounded-r-[8px] text-[16px] text-[#fff] hover:bg-[#002a5e] transition-colors">
                                Unirse
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-[40px] mt-[40px] border-t border-[#c2c6d4] text-center opacity-70">
                    <span className="text-[14px] font-normal leading-[20px] text-[#424752]">
                        © 2024 Salud Integral. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
};