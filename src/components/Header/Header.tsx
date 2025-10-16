import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Lägg till NavLink
import { theme } from "../../styles/theme";
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

  // Scroll to top on route change (behåll din logik, men förenklad)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // Använd 'auto' för att undvika smooth-interferens
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "auto" }); // Ändrat till 'auto' för responsivitet
    }
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
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "1rem",
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                borderRadius: "0.5rem",
                fontWeight: 500,
                textShadow: shouldBeScrolled
                  ? "none"
                  : "0 2px 4px rgba(0, 0, 0, 0.3)",
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                textDecoration: "none",
              }}
            >
              About us
            </NavLink>
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
