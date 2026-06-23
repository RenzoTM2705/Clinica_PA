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
      bg-green-700
      text-white
      shadow-lg
      hover:scale-105
      transition
      "
        >
            +
        </button>
    );
};

export default FloatingButton;