import styled from "styled-components";
import { theme } from "../../styles/theme";

export const GridSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgb(29, 29, 31);
  min-height: 100dvh;
  width: 100dvw;
  padding: ${theme.spacing.xxxl} 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

export const GridHeader = styled.div`
  text-align: left;
  margin: 0 auto ${theme.spacing.xxl} auto;
  max-width: 1000px;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const GridTitle = styled.h2`
  font-size: 56px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

export const GridSubtitle = styled.p`
  font-size: 28px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-inline: 10rem;

  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-inline: ${theme.spacing.md};
  }
`;

export const GridItem = styled.div`
  position: relative;
  flex: 0 0 80%;
  scroll-snap-align: start;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  background: black;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GridTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.lg};

  color: white;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: ${theme.spacing.lg};
  padding: 6px 12px;
  background: rgba(60, 60, 67, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: fit-content;
  margin-inline: auto;
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "24px" : "6px")};
  height: 6px;
  border-radius: 3px;
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"};
  transition: all 0.3s ease;
`;
