import { useNavigate } from "react-router-dom";

import LoginHeader from "../components/login/LoginHeader";
import FacialScanner from "../components/login/FacialScanner";
import RecordButton from "../components/login/RecordButton";

import { useFacialScanner } from "../hooks/useFacialScanner";

const Login = () => {
  const navigate = useNavigate();

  const { videoRef, isRecording, recognized, message, snapshot, doctorName } =
    useFacialScanner();

  const handleContinue = () => {
    localStorage.setItem("doctor", doctorName);

    navigate("/webrtc");
  };

  return (
    <div
      className="
                min-h-screen
                flex
                justify-center
                items-center
                px-4
                bg-slate-50
            "
    >
      <div
        className="
                    w-full
                    max-w-xl
                    bg-white
                    rounded-xl
                    shadow-lg
                    p-10
                    space-y-8
                "
      >
        <LoginHeader
          status={
            recognized
              ? "Identidad verificada"
              : "Posicione su rostro frente a la cámara"
          }
        />

        <FacialScanner
          videoRef={videoRef}
          isRecording={isRecording}
          snapshot={snapshot}
        />

        {recognized && (
          <div
            className="
                            flex
                            flex-col
                            items-center
                            gap-4
                        "
          >
            <h2
              className="
                                text-2xl
                                font-bold
                                text-green-600
                            "
            >
              {message}
            </h2>

            <button
              onClick={handleContinue}
              className="
                                px-8
                                py-3
                                rounded-lg
                                bg-[#003f87]
                                text-white
                                font-semibold
                                hover:bg-[#002f67]
                                transition
                            "
            >
              Continuar
            </button>
          </div>
        )}

        {!recognized && (
          <RecordButton isRecording={isRecording} onClick={() => {}} />
        )}
      </div>
    </div>
  );
};

export default Login;
