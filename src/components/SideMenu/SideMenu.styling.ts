import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SideMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const SideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100dvh;
  width: 40vw;
  max-width: 500px;
  background-color: ${theme.colors.background};
  box-shadow: ${theme.shadows.lg};
  z-index: 1002;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 75vw;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100vw;
    max-width: 100vw;
  }
`;

export const SideMenuContent = styled.div`
  padding: ${theme.spacing.xl};
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
    padding-top: ${theme.spacing.xl};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xs};
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: ${theme.spacing.sm};
    right: ${theme.spacing.sm};
    width: 36px;
    height: 36px;
  }
`;

export const SideMenuTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  color: ${theme.colors.text};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.sm};
  }
`;

export const SideMenuDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.7;
  font-size: 1.1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    margin-bottom: ${theme.spacing.md};
    line-height: 1.5;
  }
`;
