export default function PrincipalView() {
    return (
        <div className="w-full min-h-screen bg-[rgba(246,250,255,0.2)] overflow-x-hidden flex flex-col items-center">
            {/* Header - Fijo en la parte superior */}
            <header className="fixed top-0 left-0 w-full h-[80px] flex justify-center bg-[#fff] border-b border-[#c2c6d4] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] z-[230]">
                <div className="max-w-7xl w-full px-[40px] flex justify-between items-center">
                    <div className="flex gap-[8px] items-center">
                        <div className="w-[133.33px] h-[40px] bg-[url(https://static.codia.ai/image/2026-06-22/tJLAnw9wFt.png)] bg-cover bg-no-repeat overflow-hidden" />
                    </div>

                    <nav className="hidden lg:flex gap-[64px] items-center">
                        <span className="text-[16px] font-semibold leading-[24px] text-[#003f87] border-t-2 border-t-[#003f87] pt-0 pb-[4px]">Inicio</span>
                        <span className="text-[16px] font-normal leading-[24px] text-[#424752]">Nosotros</span>
                        <span className="text-[16px] font-normal leading-[24px] text-[#424752]">Servicios</span>
                        <span className="text-[16px] font-normal leading-[24px] text-[#424752]">Especialidades</span>
                        <span className="text-[16px] font-normal leading-[24px] text-[#424752]">Contacto</span>
                    </nav>

                    <div className="flex px-[32px] py-[8px] bg-[#003f87] rounded-full">
                        <span className="text-[16px] font-normal leading-[24px] text-[#fff]">Ingresar</span>
                    </div>
                </div>
            </header>

            {/* Contenido Principal */}
            <main className="w-full max-w-7xl mx-auto px-6 pt-[120px] pb-20 flex flex-col items-center">
                
                {/* SECCIÓN 1: Hero Banner - Tu salud es nuestra prioridad CON IMAGEN A LA DERECHA */}
                <section className="w-full py-16 mb-12">
                    <div className="max-w-7xl mx-auto px-[40px] flex flex-col lg:flex-row items-center gap-[64px]">
                        
                        {/* Columna izquierda - Texto */}
                        <div className="flex-1 flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left">
                            <div className="px-[16px] py-[8px] bg-[#0056b3] rounded-full inline-block">
                                <span className="text-[16px] font-normal leading-[24px] text-[#bbd0ff]">Excelencia Médica Certificada</span>
                            </div>

                            <h1 className="text-[60px] font-bold leading-[60px] tracking-[-1.2px]">
                                <span className="text-[#003f87]">Tu salud es<br /></span>
                                <span className="text-[#006e25]">nuestra prioridad.</span>
                            </h1>

                            <p className="max-w-[512px] text-[18px] font-normal leading-[28px] text-[#424752]">
                                Combinamos tecnología de vanguardia con un equipo
                                <br />
                                humano altamente calificado para brindarte la atención que
                                <br />
                                tú y tu familia merecen.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-[16px]">
                                <div className="px-[64px] py-[26px] bg-[#003f87] rounded-[8px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#002a5e] transition-colors">
                                    <span className="text-[16px] font-normal leading-[24px] text-[#fff]">Conoce Más</span>
                                </div>
                                <div className="px-[64px] py-[24px] rounded-[8px] border-2 border-[#003f87] cursor-pointer hover:bg-[#003f87] hover:text-white transition-colors">
                                    <span className="text-[16px] font-normal leading-[24px] text-[#003f87] hover:text-white">Agendar Cita</span>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - Imagen (placeholder) */}
                        <div className="flex-1 w-full max-w-[566px]">
                            <div className="w-full h-[400px] lg:h-[500px] bg-[url(https://static.codia.ai/image/2026-06-22/y2n2xzoTgp.png)] bg-cover bg-center rounded-[24px] border border-[#c2c6d4] shadow-[0_8px_10px_0_rgba(0,0,0,0.1)]">
                                {/* Espacio para la imagen */}
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECCIÓN 2: ¿Por qué elegir Salud Integral? con imagen */}
                <section className="w-full py-12 mb-12">
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
                <section className="w-full py-[64px] bg-[#f6faff] rounded-[20px] mb-12">
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
                <section className="w-full py-[64px] bg-[#ecf5fe] rounded-[20px]">
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
                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px]">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[20px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/KOh07iiQBk.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Medicina General</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Atención primaria integral para todas las edades.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px]">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[20px] h-[16px] bg-[url(https://static.codia.ai/image/2026-06-22/2z2XqeM6FD.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Cardiología</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Cuidado experto para la salud de su corazón.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px]">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#d7e2ff] rounded-[8px]">
                                    <div className="w-[18px] h-[18px] bg-[url(https://static.codia.ai/image/2026-06-22/0giwCsQESq.png)] bg-cover bg-no-repeat" />
                                </div>
                                <span className="text-[20px] font-semibold leading-[28px] text-[#003f87]">Pediatría</span>
                                <p className="text-[14px] font-normal leading-[20px] text-[#424752]">Atención especializada para el crecimiento sano.</p>
                            </div>

                            <div className="p-[24px] bg-[#fff] rounded-[12px] border border-[#c2c6d4] flex flex-col gap-[8px]">
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
            <footer className="w-full bg-[#e6eff8] border-t border-[#c2c6d4]">
                <div className="max-w-7xl mx-auto px-[40px] py-[64px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
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

                        <div className="flex flex-col gap-[16px]">
                            <span className="text-[16px] font-normal leading-[24px] text-[#003f87]">Enlaces Rápidos</span>
                            <div className="flex flex-col gap-[8px]">
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752] cursor-pointer hover:text-[#003f87]">Privacidad</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752] cursor-pointer hover:text-[#003f87]">Términos de Uso</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752] cursor-pointer hover:text-[#003f87]">Portal del Paciente</span>
                                <span className="text-[14px] font-normal leading-[20px] text-[#424752] cursor-pointer hover:text-[#003f87]">Citas Online</span>
                            </div>
                        </div>

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

                    <div className="pt-[40px] mt-[40px] border-t border-[#c2c6d4] text-center opacity-70">
                        <span className="text-[14px] font-normal leading-[20px] text-[#424752]">
                            © 2024 Salud Integral. Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </footer>

            {/* Botón flotante */}
            <div className="fixed bottom-[25px] right-[25px] z-[224] group">
                <div className="w-[64px] h-[64px] flex items-center justify-center bg-[#006e25] rounded-full shadow-[0_8px_10px_0_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#004d1a] transition-colors relative">
                    <div className="w-[22.5px] h-[25px] bg-[url(https://static.codia.ai/image/2026-06-22/CG6GO99JhQ.png)] bg-cover bg-no-repeat" />
                    {/* Tooltip */}
                    <div className="absolute right-[74px] px-[16px] py-[8px] bg-[#293138] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-[16px] font-normal leading-[24px] text-[#e9f2fb]">Agendar Cita</span>
                    </div>
                </div>
            </div>
        </div>
    );
}