import styled from "styled-components";
import { theme } from "../../styles/theme";

// Header styles
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
    transform: scale(1.05);
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
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  text-shadow: ${(props) =>
    props.$isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.3)"};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${(props) =>
      props.$isScrolled
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(255, 255, 255, 0.25)"};
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &.active {
    background-color: ${theme.colors.primary};
    color: white;

    &::before {
      display: none;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.xs};
  }
`;
