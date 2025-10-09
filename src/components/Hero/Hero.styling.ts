import styled from "styled-components";
import { theme } from "../../styles/theme";

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
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  ${(props) =>
    props.$variant === "secondary"
      ? `
    background: transparent;
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: ${theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  `
      : `
    background: #181818ff;
    color: white;

    &:hover {
      background: #191919ff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: 1rem;
    width: 100%;
    max-width: 250px;
  }
`;
