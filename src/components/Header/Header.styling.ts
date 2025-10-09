import styled from "styled-components";
import { theme } from "../../styles/theme";

interface HeaderContainerProps {
  $isScrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(0, 0, 0, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(10px)" : "none")};
  border-bottom: ${(props) =>
    props.$isScrolled ? `1px solid rgba(255, 255, 255, 0.1)` : "none"};
  z-index: 1000;
  padding: ${theme.spacing.sm} 0;
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

interface LogoProps {
  $isScrolled: boolean;
}

export const Logo = styled.h1<LogoProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.$isScrolled ? "#ffffff" : "#ffffff")};
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: ${(props) =>
    props.$isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.3)"};

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.xs};
  }
`;

interface NavButtonProps {
  $isScrolled: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  background: none;
  border: none;
  color: ${(props) => (props.$isScrolled ? "#ffffff" : "#ffffff")};
  font-size: 1rem;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  font-weight: 500;
  text-shadow: ${(props) =>
    props.$isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.3)"};

  &:hover {
    background-color: ${(props) =>
      props.$isScrolled
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.2)"};
    color: ${theme.colors.primary};
  }

  &:active {
    transform: translateY(1px);
  }

  &.active {
    background-color: ${theme.colors.primary};
    color: white;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.xs};
  }
`;
