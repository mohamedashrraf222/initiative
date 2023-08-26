import "./NavBarStyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleClicke = () => {
    setClicked((prev) => !prev);
  };
  return (
    <nav className="Nav-container">
      <div className="menu-icones" onClick={handleClicke}>
        {clicked ? (
          <i className="openClose"><img src="x.png" alt="" /></i>
        ) : (
          <i className="openClose"><img src="burger.png" alt="" /></i>
        )}
      </div>

      <ul className={`Nav-Menu ${clicked && "active"}`}>
        <li>
          <a className="Nav-Links" href="#home-container">
            الصفحة الرئيسية
          </a>
        </li>
        <li>
          <a className="Nav-Links" href="#about">
            عن المبادرة
          </a>
        </li>
        <li>
          <a className="Nav-Links" href="#whoAreWe">
           من نحن
          </a>
        </li>
        <li>
          <a className="Nav-Links" href="#joinus">
            تواصل معنا
          </a>
        </li>
        <li className="Nav-Links-Mobile-li">
          <Link className="Nav-Links-Mobile" to="/signup">
            سجل بالمبادرة
          </Link>
        </li>
        <button>سجل بالمبادرة</button>
      </ul>
      <h1 className="Nav-Logo">مبادرة التوظيف و التأهيل</h1>
    </nav>
  );
}
