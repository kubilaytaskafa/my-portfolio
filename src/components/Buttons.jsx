import { useNavigate } from "react-router-dom";
const Buttons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-start flex-col text-white gap-5 bg-[#171717] min-h-screen text-center">
      <button
        className="mt-4 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg"
        onClick={() => navigate("/Hakkımda")}
      >
        Hakkımda
      </button>

      <button
        className="mt-2 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg"
        onClick={() => navigate("/Projelerim")}
      >
        Projelerim
      </button>

      <button
        className="mt-2 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg"
        onClick={() => navigate("/Eğitim")}
      >
        Eğitim
      </button>
    </div>
  );
};

export default Buttons;
