import React, { useState, useEffect } from "react";

const About = () => {
  const text =
    "Merhaba, ben Kubilay. Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri Bölümü 2. sınıf öğrencisiyim ve Saya Yazılım firmasında Junior Software Developer olarak çalışıyorum. Uzmanlık alanlarım arasında Python, JavaScript, React.js, TailwindCSS, Java, SQL, Delphi ve RAD Studio yer almaktadır. Yeni teknolojiler öğrenmeye ve projelerle deneyim kazanmaya büyük bir heyecanla devam ediyorum.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Her harfin yazılma hızı (ms)

      return () => clearTimeout(timer); // Temizlik
    }
  }, [index, text]);

  return (
    <div className="">
      <p className="font-mono text-lg text-white">
        {displayedText}
        <span className="animate-pulse">|</span> {/* Yanıp sönen imleç */}
      </p>
    </div>
  );
};

export default About;
