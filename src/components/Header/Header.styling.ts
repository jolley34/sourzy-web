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
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    width: 0;
    height: 2px;
    background: white;
    transform: translateX(-50%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
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
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;

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

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &.active {
    &::after {
      width: 100%;
      background: white;
    }
  }

  svg {
    opacity: 0;
    transform: translate(-4px, 4px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.xs};

    svg {
      display: none;
    }
  }
`;

// Hero styles
interface HeroContainerProps {
  mediaType: "image" | "video";
  mediaSrc?: string;
}

export const HeroContainer = styled.section
  .withConfig({
    shouldForwardProp: (prop) => !["mediaType", "mediaSrc"].includes(prop),
  })
  .attrs<HeroContainerProps>(({ mediaType, mediaSrc }) => ({
    style:
      mediaType === "image"
        ? {
            backgroundImage: `url(${mediaSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
        : {},
  }))<HeroContainerProps>`
  position: relative;
  color: white;
  padding: ${theme.spacing.xxl} 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: calc(80px + ${theme.spacing.xxl});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 100vh;
    padding-top: calc(70px + ${theme.spacing.xl});
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100vh;
    padding: calc(60px + ${theme.spacing.lg}) 0 ${theme.spacing.xl} 0;
  }
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  text-align: left;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
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

  &:hover::before {
    left: 100%;
  }

  ${(props) =>
    props.$variant === "secondary"
      ? `
    background: transparent;
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: ${theme.colors.primary};
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
      border-color: white;
    }
  `
      : `
    background: #181818ff;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      background: #252525ff;
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
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
