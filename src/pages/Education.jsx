import React, { useState, useEffect } from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: "Şereflikoçhisar Toki İlkokulu",
      level: "İlkokul",
      description:
        "İlk eğitimimi Şereflikoçhisar Toki İlkokulu'nda aldım. Burada temel eğitimimi tamamlayarak öğrenmeye ilk adımımı attım.",
    },
    {
      id: 2,
      school: "Şereflikoçhisar Abdülbaki İmam Hatip Ortaokulu",
      level: "Ortaokul",
      description:
        "Ortaokul eğitimimi Şereflikoçhisar Abdülbaki İmam Hatip Ortaokulu'nda tamamladım. Eğitim hayatımda bilimsel düşünme ve karakter gelişimi üzerine önemli bir dönüm noktasıydı.",
    },
    {
      id: 3,
      school: "Manavgat Özel Elit Anadolu Lisesi",
      level: "Lise",
      description:
        "Lise eğitimimi Manavgat Özel Elit Anadolu Lisesi'nde tamamladım. Burada fen bilimleri ve sosyal bilimler alanlarına olan ilgim arttı.",
    },
    {
      id: 4,
      school:
        "Necmettin Erbakan Üniversitesi - Yönetim Bilişim Sistemleri Bölümü",
      level: "Üniversite (2. Sınıf)",
      description:
        "Şu anda Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri Bölümü 2. sınıf öğrencisiyim. Burada hem yazılım geliştirme hem de bilişim yönetimi üzerine eğitimler alıyorum.",
    },
  ];

  const [visibleSchools, setVisibleSchools] = useState([]);

  useEffect(() => {
    educationData.forEach((school, index) => {
      setTimeout(() => {
        setVisibleSchools((prev) => [...prev, school]);
      }, index * 500);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#212121] text-white p-6">
      <div className="flex flex-col gap-6 w-full">
        {visibleSchools.map((school) => (
          <div key={school.id} className="opacity-0 animate-fadeIn">
            <h1 className="text-xl font-bold">{school.school}</h1>
            <p>{school.level}</p>
            <p className="mt-2">{school.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
