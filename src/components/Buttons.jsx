import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex items-center justify-start flex-col text-white gap-5 bg-[#171717] min-h-screen text-center">
      <Link to={"/Hakkımda"}>
        <button className="mt-4 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg">
          Hakkımda
        </button>
      </Link>
      <Link to={"/Projelerim"}>
        <button className="mt-2 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg">
          Projelerim
        </button>
      </Link>
      <Link to={"/Eğitim"}>
        <button className="mt-2 ml-4 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#171717] hover:bg-[#323232] transition duration-300 text-sm sm:text-base md:text-lg">
          Eğitim
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
