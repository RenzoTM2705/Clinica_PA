/**
 * Botón flotante para agendar citas.
 */
const FloatingButton = () => {
    return (
        <button
            className="
      fixed
      bottom-6
      right-6
      w-16
      h-16
      rounded-full
      bg-gray-800/50
      text-white
      shadow-lg
      hover:scale-105
      transition-all
        duration-300
      hover:bg-[#33383f]/50
      cursor-not-allowed
      "
        >
            +
        </button>
    );
};

export default FloatingButton;

//color original: bg - green - 700