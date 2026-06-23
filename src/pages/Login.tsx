import LoginHeader from "../components/login/LoginHeader";
import FacialScanner from "../components/login/FacialScanner";
import ProgressSection from "../components/login/ProgressSection";
import ProcessSteps from "../components/login/ProcessSteps";
import RecordButton from "../components/login/RecordButton";

import { useFacialScanner } from "../hooks/useFacialScanner";

const Login = () => {
    const {
        videoRef,
        isRecording,
        progress,
        status,
        cameraAccess,
        startRecording,
    } = useFacialScanner();

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
                    relative
                "
            >
                <LoginHeader status={status} />

                <FacialScanner
                    videoRef={videoRef}
                    cameraAccess={cameraAccess}
                    isRecording={isRecording}
                />

                <ProgressSection
                    progress={progress}
                    isRecording={isRecording}
                />

                <ProcessSteps progress={progress} />

                <RecordButton
                    isRecording={isRecording}
                    progress={progress}
                    onClick={startRecording}
                />
            </div>
        </div>
    );
};

export default Login;