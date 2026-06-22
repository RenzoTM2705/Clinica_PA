import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Listo para escanear');
    const [cameraAccess, setCameraAccess] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    // Solicitar acceso a la cámara al cargar el componente
    useEffect(() => {
        requestCameraAccess();
        return () => {
            // Limpiar stream al desmontar
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const requestCameraAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'user',
                    width: { ideal: 320 },
                    height: { ideal: 320 }
                } 
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setCameraAccess(true);
            setStatus('Cámara activa - Presiona "Grabar Rostro"');
        } catch (err) {
            console.error('Error al acceder a la cámara:', err);
            setCameraAccess(false);
            setStatus('No se pudo acceder a la cámara. Por favor, permite el acceso.');
        }
    };

    const handleStartRecording = () => {
        if (!cameraAccess) {
            requestCameraAccess();
            return;
        }

        setIsRecording(true);
        setProgress(0);
        setStatus('Grabando rostro...');

        // Simular progreso de grabación
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsRecording(false);
                    setStatus('¡Rostro grabado exitosamente!');
                    return 100;
                }
                return prev + 2;
            });
        }, 80);
    };

    return (
        <div className="w-full min-h-screen bg-[rgba(246,250,255,0.2)] flex items-center justify-center px-4">
            {/* Contenedor principal del login */}
            <div className="w-full max-w-[512px] p-[40px] flex flex-col gap-[40px] items-center bg-[#fff] rounded-[12px] border border-[#c2c6d4] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] relative">
                
                {/* Botón para volver al inicio */}
                <Link to="/" className="absolute top-4 left-4 text-[#003f87] hover:text-[#002a5e] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>

                {/* Título y descripción */}
                <div className="flex flex-col gap-[8px] items-center w-full">
                    <span className="text-[32px] font-bold leading-[40px] text-[#003f87] tracking-[-0.64px] text-center">
                        Acceso Biométrico
                    </span>
                    <span className="text-[16px] font-normal leading-[24px] text-[#424752] text-center">
                        {status}
                    </span>
                </div>

                {/* Círculo de escaneo facial con cámara en vivo */}
                <div className="relative w-[320px] h-[320px] flex items-center justify-center bg-[#e0e9f2] rounded-full border-4 border-[#0056b3] overflow-hidden">
                    {cameraAccess ? (
                        // Video en vivo de la cámara
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        // Imagen de placeholder cuando no hay acceso a cámara
                        <div className="absolute inset-0 bg-[url(https://static.codia.ai/image/2026-06-22/VxwPjT3Ckb.png)] bg-cover bg-center" />
                    )}
                    
                    {/* Anillo decorativo */}
                    <div className="absolute inset-0 rounded-full border-2 border-[rgba(0,63,135,0.4)]" />
                    
                    {/* Círculo interior con icono de cámara */}
                    <div className="w-[192px] h-[192px] bg-[url(https://static.codia.ai/image/2026-06-22/OwMzTp8Q2Z.png)] bg-cover bg-center rounded-[8px] z-10 opacity-50" />
                    
                    {/* Línea de escaneo animada - solo visible cuando está grabando */}
                    {isRecording && (
                        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[rgba(0,63,135,0.6)] shadow-[0_0_15px_0_#003f87] animate-scan" />
                    )}
                    
                    {/* Puntos de esquina para efecto de escaneo */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#0056b3]" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#0056b3]" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#0056b3]" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#0056b3]" />

                    {/* Indicador de grabación */}
                    {isRecording && (
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-white text-xs font-bold bg-red-500/80 px-2 py-1 rounded-full">
                                GRABANDO
                            </span>
                        </div>
                    )}
                </div>

                {/* Barra de progreso */}
                <div className="flex flex-col gap-[24px] w-full">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-[14px] font-semibold leading-[16px] text-[#424752] tracking-[0.14px]">
                            {isRecording ? 'Grabando rostro...' : progress === 100 ? '¡Completado!' : 'Listo para grabar'}
                        </span>
                        <span className="text-[14px] font-semibold leading-[16px] text-[#424752] tracking-[0.14px]">
                            {progress}%
                        </span>
                    </div>
                    
                    <div className="h-[8px] w-full bg-[#e0e9f2] rounded-full overflow-hidden">
                        <div 
                            className="h-[8px] bg-gradient-to-r from-[#003f87] to-[#006e25] rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Pasos del proceso */}
                    <div className="flex gap-[8px] justify-center items-center w-full">
                        <div className={`flex flex-col gap-[8px] items-center flex-1 ${progress > 0 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="w-[20px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/pbzS67X4UU.png)] bg-cover bg-no-repeat" />
                            <span className={`text-[10px] font-bold leading-[15px] tracking-[0.5px] uppercase ${progress > 0 ? 'text-[#003f87]' : 'text-[#727784]'}`}>
                                ESCANEO
                            </span>
                        </div>
                        
                        <div className={`flex flex-col gap-[8px] items-center flex-1 ${progress > 33 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="w-[18px] h-[18px] bg-[url(https://static.codia.ai/image/2026-06-22/bsL2ZjBK7S.png)] bg-cover bg-no-repeat" />
                            <span className={`text-[10px] font-bold leading-[15px] tracking-[0.5px] uppercase ${progress > 33 ? 'text-[#003f87]' : 'text-[#727784]'}`}>
                                VALIDACIÓN
                            </span>
                        </div>
                        
                        <div className={`flex flex-col gap-[8px] items-center flex-1 ${progress > 66 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="w-[16px] h-[20px] bg-[url(https://static.codia.ai/image/2026-06-22/mbfKwiVzCU.png)] bg-cover bg-no-repeat" />
                            <span className={`text-[10px] font-bold leading-[15px] tracking-[0.5px] uppercase ${progress > 66 ? 'text-[#003f87]' : 'text-[#727784]'}`}>
                                ACCESO
                            </span>
                        </div>
                    </div>
                </div>

                {/* Botón Grabar Rostro */}
                <div className="flex flex-col items-start w-full pt-[16px]">
                    <button
                        onClick={handleStartRecording}
                        disabled={isRecording}
                        className={`w-full py-[16px] rounded-[8px] font-bold text-[16px] leading-[24px] transition-all duration-300 hover:cursor-pointer ${
                            isRecording 
                                ? 'bg-[#e0e9f2] text-[#727784] cursor-not-allowed' 
                                : progress === 100
                                    ? 'bg-[#006e25] text-white hover:bg-[#004d1a]'
                                    : 'bg-[#003f87] text-white hover:bg-[#002a5e]'
                        }`}
                    >
                        {isRecording ? 'Grabando...' : progress === 100 ? ' Rostro Registrado' : ' Grabar Rostro'}
                    </button>

                    {/* Mensaje de estado de la cámara */}
                    <div className="mt-3 text-center w-full">
                        <span className={`text-[12px] font-normal leading-[16px] ${cameraAccess ? 'text-[#006e25]' : 'text-[#dc3545]'}`}>
                            {cameraAccess ? ' Cámara activa' : ' Cámara desactivada'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Estilos para animaciones */}
            <style>{`
                @keyframes scan {
                    0% { top: 0%; }
                    50% { top: 85%; }
                    100% { top: 0%; }
                }
                
                .animate-scan {
                    animation: scan 2.5s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .animate-pulse {
                    animation: pulse 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Login;