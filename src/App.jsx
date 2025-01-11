// App.jsx
import Buttons from "./components/Buttons";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css"; // Tailwind CSS buradan import edilmeli
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education"; // Education sayfasını ekledim
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const routes = ["hakkımda", "projelerim", "eğitim"];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Öneriler oluşturma
    if (value) {
      setSuggestions(
        routes.filter((route) =>
          route.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleButtonClick = (route) => {
    // Yönlendirme için navigate kullanıyoruz
    navigate(`/${route}`);
  };

  return (
    <div className="bg-[#212121] h-screen flex">
      {/* Sol Menü */}
      <div className="w-1/3 md:w-2/12 border-r border-[#212121] min-h-screen">
        <Buttons />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Sayfa İçeriği */}
        <div className="flex-1 overflow-y-auto p-6 text-sm">
          <Routes>
            <Route path="/Hakkımda" element={<About />} />
            <Route path="/Projelerim" element={<Projects />} />
            <Route path="/Eğitim" element={<Education />} />
          </Routes>
        </div>

        {/* En Alt Div ve Input */}
        <div className="relative p-4 bg-[#2F2F2F] w-full max-w-md mx-auto mb-2 rounded-md">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 w-full bg-[#444] text-white border border-[#666] rounded"
            placeholder="Kubilay Taşkafa's Portfolio için bir ileti gönderin"
          />
          {/* Öneriler */}
          {suggestions.length > 0 && (
            <div className="absolute w-full bottom-full right-0 mb-2 space-y-2 bg-[#444] border border-[#666] rounded">
              {suggestions.map((route) => (
                <button
                  key={route}
                  onClick={() => handleButtonClick(route)}
                  className="w-full px-4 py-2 text-white rounded hover:bg-[#555] ml-2"
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
