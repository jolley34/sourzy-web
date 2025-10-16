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

interface HeaderProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  isSideMenuOpen,
  setIsSideMenuOpen,
}) => {
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

  // Reset scroll when route changes
  useEffect(() => {
    // Använd setTimeout för att säkerställa att DOM är uppdaterad
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
              About us
            </NavButton>
            <NavButton
              onClick={handleContactClick}
              $isScrolled={shouldBeScrolled}
              data-contact-button
            >
              Contact us
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
