import React, { useEffect, useRef } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

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
      // Bara iOS touch-hantering, inte scroll-blocking (det hanteras i App.tsx)
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!contentRef.current) return;

        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;
        const { scrollHeight, clientHeight, scrollTop } = contentRef.current;

        // Förhindra over-scroll på iOS
        if (scrollHeight <= clientHeight) {
          e.preventDefault();
        } else if (scrollTop === 0 && deltaY < 0) {
          e.preventDefault();
        } else if (scrollTop + clientHeight === scrollHeight && deltaY > 0) {
          e.preventDefault();
        }
      };

      if (contentRef.current) {
        contentRef.current.addEventListener("touchstart", handleTouchStart);
        contentRef.current.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
      }

      return () => {
        if (contentRef.current) {
          contentRef.current.removeEventListener(
            "touchstart",
            handleTouchStart
          );
          contentRef.current.removeEventListener("touchmove", handleTouchMove);
        }
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
        <SideMenuContent ref={contentRef}>
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
