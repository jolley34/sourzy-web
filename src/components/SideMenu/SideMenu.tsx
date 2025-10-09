import React from "react";
import { SideMenuProps } from "../../types";
import { ContactForm } from "../Form/ContactForm";
import {
  CloseButton,
  SideMenuContainer,
  SideMenuContent,
  SideMenuDescription,
  SideMenuOverlay,
  SideMenuTitle,
} from "./SideMenu.styling";

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  const handleClose = () => {
    const event = new CustomEvent("closeContactSideMenu");
    window.dispatchEvent(event);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <SideMenuOverlay $isOpen={isOpen} onClick={handleOverlayClick} />
      <SideMenuContainer $isOpen={isOpen}>
        <SideMenuContent>
          <CloseButton onClick={handleClose} aria-label="Stäng meny">
            ✕
          </CloseButton>

          {content === "contact" && (
            <div>
              <SideMenuTitle>Kontakta oss</SideMenuTitle>
              <SideMenuDescription>
                Vi skulle älska att höra från dig! Fyll i formuläret nedan så
                återkommer vi så snart som möjligt. Du kan också nå oss via
                email eller telefon.
              </SideMenuDescription>
              <ContactForm onSuccess={handleClose} autoClose={false} />
            </div>
          )}
        </SideMenuContent>
      </SideMenuContainer>
    </>
  );
};
