import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SideMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
`;

export const SideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100%;
  background-color: ${theme.colors.background};
  box-shadow: ${theme.shadows.lg};
  z-index: 1002;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 75vw;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100vw;
  }
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-user-select: text;
  user-select: text;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.xl};
    padding-top: ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacing.lg};
      padding-top: ${theme.spacing.md};
      gap: ${theme.spacing.md};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: ${theme.spacing.md};
      padding-top: ${theme.spacing.sm};
      gap: ${theme.spacing.sm};
    }
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing.md};
  position: sticky;
  top: 0;
  background-color: ${theme.colors.background};
  z-index: 100;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.border};
  box-sizing: border-box;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs} ${theme.spacing.md};
  }
`;

export const SideMenuTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.text};
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 0;
  flex: 1;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
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
  min-width: 40px;
  min-height: 40px;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.surface};
      color: ${theme.colors.text};
    }
  }

  &:active {
    background-color: ${theme.colors.surface};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 44px;
    min-height: 44px;
    font-size: 1.5rem;
  }
`;

export const SideMenuDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.7;
  font-size: 1.1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const SideMenuSpacer = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
    width: 100%;
    height: max(${theme.spacing.lg}, env(safe-area-inset-bottom, 0));
    background-color: white;
    flex-shrink: 0;
  }
`;
