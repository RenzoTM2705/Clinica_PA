const WebRTCPage = () => {
    return (
        <div className="w-screen h-screen">
            <iframe
                src="/webrtc/index.html"
                title="WebRTC"
                className="w-full h-full border-0"
            />
        </div>
    );
};

export default WebRTCPage;