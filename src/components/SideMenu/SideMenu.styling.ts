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

  max-width: 40vw;
  background-color: ${theme.colors.background};
  box-shadow: ${theme.shadows.lg};
  z-index: 1002;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  overflow-y: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100vw;
    max-width: 100vw;
  }
`;

export const SideMenuContent = styled.div`
  padding: ${theme.spacing.xl};
  height: 100%;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
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

  &:hover {
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: ${theme.spacing.sm};
    right: ${theme.spacing.sm};
  }
`;

export const SideMenuTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-top: ${theme.spacing.lg};
  }
`;

export const SideMenuDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.7;
  font-size: 1.1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: ${theme.spacing.lg};
  }
`;
