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
              <SideMenuTitle>Contact us</SideMenuTitle>
              <SideMenuDescription>
                We are confident that we can find a tailored solution to meet
                your needs. Feel free to send us your requests, questions or
                part numbers.
              </SideMenuDescription>
              <ContactForm onSuccess={handleClose} autoClose={false} />
            </div>
          )}
        </SideMenuContent>
      </SideMenuContainer>
    </>
  );
};
