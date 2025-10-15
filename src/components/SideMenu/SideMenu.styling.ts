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
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg}; /* Consistent spacing between elements */
  width: 100%;
  box-sizing: border-box;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg}; /* Spacing between description and form */
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.sm};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xs};
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs};
  }
`;

export const SideMenuTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.text};
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 0; /* Remove default margins for consistency */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing
    .md}; /* Ensure consistent spacing between title and button */
`;

export const SideMenuDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.7;
  font-size: 1.1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 0; /* Remove default margins for consistency */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
