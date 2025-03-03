import { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [productUrl, setProductUrl] = useState("");

  useEffect(() => {
    const hash = window.location.hash; // Misol: "#https://detail.1688.com/offer/45667018825.html"
    if (hash) {
      const decodedHash = decodeURIComponent(hash.substring(1)); // "#" ni olib tashlaymiz va dekodlaymiz
      setProductUrl(decodedHash);
    }
  }, [location]);

  const handleAppOpen = () => {
    if (productUrl) {
      // Deep linkni yaratish
      const appUrl = `app.abusahiy.uz://GoodsDetailView/${encodeURIComponent(
        productUrl
      )}`;
      window.location.href = appUrl;

      // Agar deep link ishlamasa, fallback uchun timeout qo'shish
      setTimeout(() => {
        alert(
          "Ilova ochilmadi. Iltimos, ilovani o'rnatganingizga ishonch hosil qiling."
        );
      }, 3000); // 3 soniya kutib, fallbackni boshqarish
    } else {
      alert("Mahsulot havolasi topilmadi!");
    }
  };

  const handleDownloadApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // iOS uchun tekshirish
    //@ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href =
        "https://apps.apple.com/uz/app/abu-sahiy/id6499200131"; // App Store havolasi
    }
    // Android uchun tekshirish
    else if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.abusahiy.shop&hl=ru"; // Google Play havolasi
    }
    // Boshqa qurilmalar uchun (masalan, desktop)
    else {
      alert("Iltimos, mobil qurilma yordamida urinib ko'ring!");
    }
  };

  return (
    <div className="bg-container">
      <div>
        <img src="/Exclude.png" className="img" alt="img" />
      </div>
      <button onClick={handleAppOpen} className="button">
        App Open
      </button>
      <button onClick={handleDownloadApp} className="button">
        Download App
      </button>
    </div>
  );
}

export default App;
