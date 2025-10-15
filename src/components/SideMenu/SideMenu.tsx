import React, { useEffect } from "react";
import { SideMenuProps } from "../../types";
import { ContactForm } from "../Form/ContactForm";
import {
  CloseButton,
  SideMenuContainer,
  SideMenuContent,
  SideMenuDescription,
  SideMenuHeader,
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

  useEffect(() => {
    if (isOpen) {
      // Förhindra scroll på body och html när sidemenu är öppen
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // iOS Safari fix - förhindra touchmove på body
      const preventScroll = (e: TouchEvent) => {
        e.preventDefault();
      };

      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.removeEventListener("touchmove", preventScroll);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <>
      <SideMenuOverlay $isOpen={isOpen} onClick={handleOverlayClick} />
      <SideMenuContainer $isOpen={isOpen} data-sidemenu-container>
        <SideMenuHeader>
          <SideMenuTitle>Contact us</SideMenuTitle>
          <CloseButton onClick={handleClose} aria-label="Close menu">
            ✕
          </CloseButton>
        </SideMenuHeader>
        <SideMenuContent>
          {content === "contact" && (
            <div className="content-wrapper">
              <SideMenuDescription>
                We are confident that we can find a tailored solution to meet
                your needs. Feel free to send us your requests, questions, or
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
