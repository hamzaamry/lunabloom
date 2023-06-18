import React, { useState, useEffect } from "react";

import "../Styles/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const navbarClass = isSticky ? "  nav nav__fixed nav_white" : "nav nav__fixed nav_transparant";

  return (
    <nav className={navbarClass}>
      <a href="/" className="nav__brand">
        LUNABLOOM
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/Pricing" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <a href="/Services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="/AboutUs" className="nav__link">
            About us
          </a>
        </li>
        <li className="nav__item">
          <a href="/JoinNow" className="nav__link">
            Join Now
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

