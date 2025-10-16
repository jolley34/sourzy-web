import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const FooterContainer = styled.footer`
  background: ${theme.colors.background};
  border-top: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.lg} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    align-items: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  min-width: 200px;
  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const FooterText = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  font-size: 0.95rem;
  width: 90%;
`;

const FooterLink = styled.a`
  color: ${theme.colors.textLight};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const FooterBottom = styled.div`
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${theme.colors.textLight};
  transition: color 0.2s ease;
  font-size: 1.2rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const event = new CustomEvent("openContactSideMenu");
      window.dispatchEvent(event);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo>Sourzy</Logo>
            <FooterText>
              We are dedicated to streamlining and enhancing trade in industrial
              automation.
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Company</FooterTitle>
            <FooterLink href="/about">About us</FooterLink>
            {/*  <FooterLink href="#" onClick={handleContactClick}>
              Contact
            </FooterLink> */}
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <FooterText>info@sourzy.com</FooterText>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Sourzy. All rights reserved.
          </Copyright>
          {/*  <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FacebookLogo weight="bold" size={24} />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <XLogo weight="bold" size={24} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <LinkedinLogo weight="bold" size={24} />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <InstagramLogo weight="bold" size={24} />
            </SocialLink>
          </SocialLinks> */}
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
