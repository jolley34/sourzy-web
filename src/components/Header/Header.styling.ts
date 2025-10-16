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
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;
  z-index: 1000;
  padding: calc(${theme.spacing.sm} + env(safe-area-inset-top, 0)) 0
    ${theme.spacing.sm};
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
    height: 48px;
  }
`;

interface LogoProps {
  $isScrolled: boolean;
}

export const Logo = styled.h1<LogoProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: ${(props) =>
    props.$isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.3)"};
  margin: 0;
  line-height: 1;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.xs};
  align-items: center;
  height: 100%;

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
  color: #ffffff;
  font-size: 1rem;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 0.5rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
  font-weight: 500;
  text-shadow: ${(props) =>
    props.$isScrolled ? "none" : "0 2px 4px rgba(0, 0, 0, 0.3)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: white;
    transform: translateX(-50%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (hover: hover) {
    &:hover::after {
      width: 80%;
    }

    &:hover {
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &.active {
    &::after {
      width: 80%;
      background: white;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    min-height: 44px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing.md};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.95;
  max-width: 700px;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 90%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.5;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: left;
  margin-top: ${theme.spacing.xl};
  align-items: left;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: left;
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.lg};
  }
`;

export const CTAButton = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  @media (hover: hover) {
    &:hover::before {
      left: 100%;
    }
  }

  ${(props) =>
    props.$variant === "secondary"
      ? `
    background: transparent;
    color: white;
    border-color: white;

    @media (hover: hover) {
      &:hover {
        background: white;
        color: ${theme.colors.primary};
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
        border-color: white;
      }
    }
  `
      : `
    background: #181818ff;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    @media (hover: hover) {
      &:hover {
        background: #252525ff;
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
      }
    }
  `}

  &:active {
    transform: translateY(-1px) scale(1);
    transition: all 0.1s ease;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: 1rem;
    width: 100%;
    max-width: 250px;
  }
`;
