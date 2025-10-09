import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContentSection = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const ContentText = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.md};
  }
`;

export const ContentDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const ContentFeatures = styled.ul`
  list-style: none;
  margin: ${theme.spacing.lg} 0;
`;

export const ContentFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  font-size: 1rem;
  color: ${theme.colors.text};

  &:before {
    content: "✓";
    color: ${theme.colors.success};
    font-weight: bold;
    margin-right: ${theme.spacing.sm};
    font-size: 1.2rem;
  }
`;

export const ContentImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  max-height: 400px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    margin: 0 auto;
    max-height: 250px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s;
    opacity: 0;
  }

  &:hover::before {
    animation: shimmer 1.5s ease-in-out;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
      opacity: 0;
    }
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  ${ContentImageWrapper}:hover & {
    transform: scale(1.02);
  }
`;

export const ContentButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.md};

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;
