import React from 'react';
import { Navbar, Footer } from '../components';

const PrincipalView: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[rgba(246,250,255,0.2)] overflow-x-hidden flex flex-col items-center">
            {/* Navbar */}
            <Navbar />

            {/* Contenido Principal */}
            <main className="w-full flex flex-col items-center">
                
                {/* SECCIÓN 1: Hero Banner - 100vh con imagen de fondo */}
                <section className="w-full h-screen relative overflow-hidden">
                    {/* Imagen de fondo con degradado sutil */}
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, 
                                    rgba(0, 20, 40, 0.70) 0%, 
                                    rgba(0, 40, 80, 0.50) 40%, 
                                    rgba(0, 60, 100, 0.30) 70%,
                                    rgba(0, 80, 120, 0.10) 100%
                                ),
                                url(https://static.codia.ai/image/2026-06-22/y2n2xzoTgp.png)
                            `
                        }}
                    />
                    
                    {/* Contenido */}
                    <div className="relative z-10 w-full h-full flex items-center">
                        <div className="max-w-7xl mx-auto w-full px-[40px]">
                            <div className="max-w-[672px] flex flex-col gap-[24px] items-start">
                                
                                {/* Título */}
                                <h1 className="text-[60px] font-bold leading-[60px] tracking-[-1.2px]">
                                    <span className="text-white">Tu salud es<br /></span>
                                    <span className="text-[#80f98b]">nuestra prioridad</span>
                                </h1>

                                {/* Descripción */}
                                <p className="max-w-[512px] text-[18px] font-normal leading-[28px] text-[#e8edf5]">
                                    Combinamos tecnología de vanguardia con un equipo
                                    <br />
                                    humano altamente calificado para brindarte la atención que
                                    <br />
                                    tú y tu familia merecen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 2: ¿Por qué elegir Salud Integral? con imagen */}
                <section className="w-full max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-[64px] items-center justify-center">
                        {/* Columna izquierda - Imagen con badge 24/7 */}
                        <div className="flex flex-col items-center lg:items-start flex-1 relative w-full max-w-[566px]">
                            <div className="w-full h-[566px] bg-[url(https://static.codia.ai/image/2026-06-22/y2n2xzoTgp.png)] bg-cover bg-center rounded-[24px] border border-[#c2c6d4] shadow-[0_8px_10px_0_rgba(0,0,0,0.1)] relative overflow-hidden" />
                            
                            <div className="absolute bottom-[-8px] right-[-8px] w-[272.53px] h-[144px] p-[40px] bg-[#006e25] rounded-[16px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] flex flex-col items-start">
                                <span className="text-[32px] font-bold leading-[40px] text-[#fff] tracking-[-0.64px]">24/7</span>
                                <span className="text-[16px] font-normal leading-[24px] text-[#fff]">Atención de Emergencias</span>
                            </div>
                        </div>

                        {/* Columna derecha - Texto informativo */}
                        <div className="flex flex-col gap-[40px] flex-1">
                            <div className="flex flex-col gap-[16px] items-center lg:items-start">
                                <span className="text-[32px] font-bold leading-[40px] text-[#003f87] tracking-[-0.64px] text-center lg:text-left">
                                    ¿Por qué elegir Salud Integral?
                                </span>
                                <span className="text-[18px] font-normal leading-[28px] text-[#424752] text-center lg:text-left">
                                    Entendemos que tu salud no puede esperar. Hemos optimizado
                                    <br className="hidden lg:block" />
                                    cada proceso para ofrecerte tranquilidad.
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full">
                                <div className="flex gap-[16px] items-start">
                                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#80f98b] rounded-full shrink-0">
                                        <div className="w-[19.977px] h-[16px] bg-[url(https://static.codia.ai/image/2026-06-22/C6dPcRUnVF.png)] bg-cover bg-no-repeat" />
                                    </div>
                                    <div>
                                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Atención rápida</span>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Tiempos de espera mínimos y procesos ágiles.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[16px] items-start">
                                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#80f98b] rounded-full shrink-0">
                                        <div className="w-[16px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/C4NwdbewDd.png)] bg-cover bg-no-repeat" />
                                    </div>
                                    <div>
                                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Profesionales certificados</span>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Especialistas con trayectoria internacional.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[16px] items-start">
                                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#80f98b] rounded-full shrink-0">
                                        <div className="w-[18.032px] h-[18.506px] bg-[url(https://static.codia.ai/image/2026-06-22/QWanHyU9iR.png)] bg-cover bg-no-repeat" />
                                    </div>
                                    <div>
                                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Tecnología de punta</span>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Equipamiento médico de última generación.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[16px] items-start">
                                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#80f98b] rounded-full shrink-0">
                                        <div className="w-[20px] h-[16px] bg-[url(https://static.codia.ai/image/2026-06-22/yBG66CA268.png)] bg-cover bg-no-repeat" />
                                    </div>
                                    <div>
                                        <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Historial digital</span>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Acceso seguro a tus registros desde cualquier lugar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 3: Nuestra Institución */}
                <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-[#f6faff] rounded-[20px] mb-12">
                    <div className="max-w-7xl mx-auto px-[40px] flex flex-col gap-[64px] items-center">
                        <div className="flex flex-col gap-[8px] items-center">
                            <span className="text-[32px] font-bold leading-[40px] text-[#003f87] tracking-[-0.64px]">Nuestra Institución</span>
                            <div className="w-[80px] h-[6px] bg-[#006e25] rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
                            <div className="p-[64px] bg-[#fff] rounded-[12px] border border-[#c2c6d4]">
                                <div className="flex gap-[8px] items-center mb-[16px]">
                                    <div className="w-[18px] h-[18px] bg-[url(https://static.codia.ai/image/2026-06-22/pEz3ycf1Ls.png)] bg-cover bg-no-repeat" />
                                    <span className="text-[24px] font-semibold leading-[32px] text-[#003f87]">Historia</span>
                                </div>
                                <p className="text-[16px] font-normal leading-[26px] text-[#424752]">
                                    Fundada en 1995, Salud Integral nació con la visión de transformar la experiencia médica en nuestra región.
                                    A lo largo de casi tres décadas, hemos evolucionado de un pequeño centro de atención primaria a un complejo hospitalario líder.
                                    Manteniendo siempre nuestro compromiso con la innovación y el trato humano.
                                    Cada año, atendemos a más de 50,000 pacientes con la misma dedicación que el primer día.
                                </p>
                            </div>

                            <div className="p-[64px] bg-[#003f87] rounded-[12px]">
                                <div className="flex gap-[8px] items-center mb-[16px]">
                                    <div className="w-[20px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/vtJGDvkp6s.png)] bg-cover bg-no-repeat" />
                                    <span className="text-[24px] font-semibold leading-[32px] text-[#fff]">Misión</span>
                                </div>
                                <p className="text-[16px] font-normal leading-[26px] text-[#fff] opacity-90">
                                    Proveer servicios de salud integrales con los más altos estándares de calidad y seguridad,
                                    enfocados en la recuperación y el bienestar de cada paciente.
                                </p>
                            </div>

                            <div className="p-[64px] bg-[#e6eff8] rounded-[12px] border border-[#c2c6d4]">
                                <div className="flex gap-[8px] items-center mb-[16px]">
                                    <div className="w-[22px] h-[15px] bg-[url(https://static.codia.ai/image/2026-06-22/PKqhUY05iR.png)] bg-cover bg-no-repeat" />
                                    <span className="text-[24px] font-semibold leading-[32px] text-[#003f87]">Visión</span>
                                </div>
                                <p className="text-[16px] font-normal leading-[26px] text-[#424752]">
                                    Ser reconocidos en 2030 como la institución de salud más confiable y tecnológicamente avanzada del país,
                                    líder en experiencia del paciente.
                                </p>
                            </div>

                            <div className="p-[64px] bg-[#fff] rounded-[12px] border border-[#c2c6d4]">
                                <span className="text-[24px] font-semibold leading-[32px] text-[#003f87] block mb-[16px]">Valores Fundamentales</span>
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <div className="p-[16px] flex flex-col items-center gap-[8px] rounded-[8px]">
                                        <div className="w-[25px] h-[23px] bg-[url(https://static.codia.ai/image/2026-06-22/1ghQz1fx2X.png)] bg-cover bg-no-repeat" />
                                        <span className="text-[16px] font-normal leading-[24px] text-[#141d23]">Empatía</span>
                                    </div>
                                    <div className="p-[16px] flex flex-col items-center gap-[8px] rounded-[8px]">
                                        <div className="w-[27.5px] h-[26.25px] bg-[url(https://static.codia.ai/image/2026-06-22/bjbmfE6Ots.png)] bg-cover bg-no-repeat" />
                                        <span className="text-[16px] font-normal leading-[24px] text-[#141d23]">Integridad</span>
                                    </div>
                                    <div className="p-[16px] flex flex-col items-center gap-[8px] rounded-[8px]">
                                        <div className="w-[30px] h-[15px] bg-[url(https://static.codia.ai/image/2026-06-22/WT8d1cuBDY.png)] bg-cover bg-no-repeat" />
                                        <span className="text-[16px] font-normal leading-[24px] text-[#141d23]">Colaboración</span>
                                    </div>
                                    <div className="p-[16px] flex flex-col items-center gap-[8px] rounded-[8px]">
                                        <div className="w-[17.5px] h-[23.75px] bg-[url(https://static.codia.ai/image/2026-06-22/Q14UROTcK3.png)] bg-cover bg-no-repeat" />
                                        <span className="text-[16px] font-normal leading-[24px] text-[#141d23]">Innovación</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 4: Nuestros Servicios */}
                <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-[#ecf5fe] rounded-[20px]">
                    <div className="max-w-7xl mx-auto px-[40px] flex flex-col gap-[64px] items-center">
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[24px]">
                            <div className="flex flex-col gap-[8px] items-center lg:items-start">
                                <span className="text-[32px] font-bold leading-[40px] text-[#003f87] tracking-[-0.64px]">Nuestros Servicios</span>
                                <span className="text-[16px] font-normal leading-[24px] text-[#424752]">Especialidades diseñadas para tu cuidado integral</span>
                            </div>
                            <div className="flex gap-[8px] items-center cursor-pointer hover:opacity-70">
                                <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Ver todas las especialidades</span>
                                <div className="w-[16px] h-[16px] bg-[url(https://static.codia.ai/image/2026-06-22/ytf5c6aV5Z.png)] bg-cover bg-no-repeat" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px] hover:shadow-lg transition-shadow">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[20px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/KOh07iiQBk.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Medicina General</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Atención primaria integral para todas las edades.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px] hover:shadow-lg transition-shadow">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[20px] h-[16px] bg-[url(https://static.codia.ai/image/2026-06-22/2z2XqeM6FD.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Cardiología</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Cuidado experto para la salud de su corazón.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px] hover:shadow-lg transition-shadow">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[18px] h-[18px] bg-[url(https://static.codia.ai/image/2026-06-22/0giwCsQESq.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Pediatría</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Atención especializada para el crecimiento sano.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px] hover:shadow-lg transition-shadow">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[16px] h-[19.984px] bg-[url(https://static.codia.ai/image/2026-06-22/9ywVTkGPb6.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Traumatología</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Diagnóstico y tratamiento del sistema óseo.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

             {/* Footer */}
            <div className="w-full mt-4">
                <Footer />
            </div>

            {/* Botón flotante */}
            <div className="fixed bottom-[25px] right-[25px] z-[224] group">
                <div className="w-[64px] h-[64px] flex items-center justify-center bg-[#006e25] rounded-full shadow-[0_8px_10px_0_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#004d1a] transition-colors relative">
                    <div className="w-[22.5px] h-[25px] bg-[url(https://static.codia.ai/image/2026-06-22/CG6GO99JhQ.png)] bg-cover bg-no-repeat" />
                    <div className="absolute right-[74px] px-[16px] py-[8px] bg-[#293138] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-[16px] font-normal leading-[24px] text-[#e9f2fb]">Agendar Cita</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalView;