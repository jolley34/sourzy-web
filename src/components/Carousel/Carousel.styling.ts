import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.lg};
  background: ${theme.colors.background};
  max-width: 800px;
  margin: 0 auto;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  height: 400px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

export const CarouselSlide = styled.div<{
  $isActive: boolean;
  $slideIndex: number;
  $currentIndex: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.surface} 0%,
    ${theme.colors.background} 100%
  );
  color: ${theme.colors.text};
  padding: ${theme.spacing.xl};
  text-align: center;
  transform: ${(props) => {
    const diff = props.$slideIndex - props.$currentIndex;
    return `translateX(${diff * 100}%)`;
  }};
  transition: transform 0.5s ease-in-out;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

export const SlideTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const SlideContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.textLight};
  max-width: 500px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const SlideImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: ${theme.spacing.lg};
  object-fit: cover;
  border: 3px solid ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`;

export const CarouselButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $direction }) =>
    css`
      ${$direction}: ${theme.spacing.lg};
    `}
  transform: translateY(-50%);
  background-color: ${theme.colors.background};
  border: 2px solid ${theme.colors.border};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.shadows.md};
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${theme.colors.text};
  font-size: 1.2rem;

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    ${({ $direction }) =>
      css`
        ${$direction}: ${theme.spacing.sm};
      `}
    font-size: 1rem;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background};
`;

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.$active ? theme.colors.primary : theme.colors.border};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    transform: scale(1.2);
  }
`;
