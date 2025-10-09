import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideMenu } from "../SideMenu/SideMenu";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavButton,
} from "./Header.styling";

export const Header: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const shouldBeScrolled = location.pathname !== "/" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer $isScrolled={shouldBeScrolled}>
        <HeaderContent>
          <Logo onClick={handleLogoClick} $isScrolled={shouldBeScrolled}>
            Sourzy
          </Logo>
          <Nav>
            <NavButton
              onClick={handleAboutClick}
              className={location.pathname === "/about" ? "active" : ""}
              $isScrolled={shouldBeScrolled}
            >
              Om oss
            </NavButton>
            <NavButton
              onClick={handleContactClick}
              $isScrolled={shouldBeScrolled}
              data-contact-button
            >
              Kontakta oss
            </NavButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={closeSideMenu}
        content="contact"
      />
    </>
  );
};
