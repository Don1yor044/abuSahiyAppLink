import "./App.css";

function App() {
  const handleAppOpen = () => {
    const appUrl =
      "https://app.abusahiy.uz/GoodsDetailView/https://detail.1688.com/offer/662702561373.html";
    window.location.href = appUrl;
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
        <img src="../Exclude.png" className="img" alt="img" />
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
