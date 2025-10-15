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
      // Förhindra scroll på body och html när sidemenu är öppen
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";

      // iOS Safari fix - förhindra touchmove på body men tillåt på sidemenu-innehållet
      const preventScroll = (e: TouchEvent) => {
        if (!contentRef.current?.contains(e.target as Node)) {
          e.preventDefault();
        }
      };

      document.addEventListener("touchmove", preventScroll, { passive: false });

      // Hantera touch scrolling i sidemenu
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!contentRef.current) return;

        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;
        const { scrollHeight, clientHeight, scrollTop } = contentRef.current;

        // Tillåt scroll endast om innehållet är scrollbar
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
        document.removeEventListener("touchmove", preventScroll);
        if (contentRef.current) {
          contentRef.current.removeEventListener(
            "touchstart",
            handleTouchStart
          );
          contentRef.current.removeEventListener("touchmove", handleTouchMove);
        }
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
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
