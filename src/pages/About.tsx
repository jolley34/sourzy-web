import React from "react";
import styled from "styled-components";
import { Container, Section } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

const AboutHero = styled.section`
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.surface} 0%,
    ${theme.colors.background} 100%
  );
  padding: ${theme.spacing.xxl} 0;
  padding-top: calc(80px + ${theme.spacing.xxl});
  padding-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-top: calc(70px + ${theme.spacing.xl});
    padding-bottom: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: calc(60px + ${theme.spacing.xl});
    padding-bottom: ${theme.spacing.lg};
    text-align: center;
  }
`;

const AboutSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: ${theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 ${theme.spacing.sm};
    text-align: center;
  }
`;

const ContentSection = styled(Section)`
  padding-top: ${theme.spacing.xxl};
  padding-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: ${theme.spacing.xl};
    padding-bottom: ${theme.spacing.xl};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const ContentCard = styled.div`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: 1rem;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
    text-align: left;
  }
`;

const CardDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.7;
  font-size: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
  }
`;

const StatsSection = styled.section`
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.xxl} 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl};
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const StatCard = styled.div`
  padding: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.25rem;
    text-align: center;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const TeamSection = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing.lg};
    text-align: center;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

const TeamMember = styled.div`
  text-align: center;
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
    text-align: left;
  }
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${theme.spacing.md};
  border: 4px solid ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
    border-width: 3px;
  }
`;

const MemberName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

const MemberRole = styled.p`
  color: ${theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${theme.spacing.sm};
  font-size: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    text-align: left;
  }
`;

const MemberBio = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    text-align: left;
  }
`;

const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  background: black;
  min-height: 100dvh;
  width: 100dvw;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    align-items: flex-start;
  }
`;

const AboutLabel = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  color: #ffe627;
  letter-spacing: 0.5px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    text-align: left;
  }
`;

const AboutTitle = styled.h1`
  font-size: 80px;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  color: rgb(245, 245, 247);
  line-height: 1.1;
  max-width: 1200px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 40px;
    text-align: left;
  }
`;

const AboutTitleSecondary = styled(AboutTitle)`
  text-align: center;
  font-size: 80px;
  font-weight: 600;
  margin-bottom: ${theme.spacing.sm};
  color: rgb(0, 0, 0);
  line-height: 1.1;
  max-width: 1200px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

const AboutDescription = styled.p`
  font-size: 21px;
  font-weight: 400;
  text-align: center;
  color: #86868b;
  line-height: 1.6;
  max-width: 800px;
  margin-top: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 17px;
    text-align: left;
  }
`;

const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  padding-bottom: 10rem;
  background-color: black;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm} ${theme.spacing.sm};
    padding-bottom: 10rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: ${theme.spacing.lg};
  max-height: 800px;
  object-fit: cover;

  box-shadow: ${theme.shadows.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    margin-top: ${theme.spacing.lg};
  }
`;

export const About: React.FC = () => {
  return (
    <>
      <AboutSection>
        <AboutLabel>Sourzy</AboutLabel>
        <AboutTitle>
          Automation Framework. <br />
          Engineered for Unmatched <br />
          Performance.
        </AboutTitle>
        <AboutDescription>
          Introducing the next generation of industrial automation systems,
          designed from the ground up to deliver unparalleled efficiency and
          reliability. At the heart of this innovation is a robust,
          precision-engineered control framework that optimizes operational
          performance.
        </AboutDescription>
      </AboutSection>

      <AboutImageContainer>
        <AboutImage src="https://imagine-public.x.ai/imagine-public/images/42b0c467-7178-4bd4-8add-c534b6863526.png?cache=1"></AboutImage>
      </AboutImageContainer>

      <AboutHero>
        <Container>
          <AboutTitleSecondary>Global partnership</AboutTitleSecondary>
          <AboutSubtitle>
            Vi är ett passionerat team av experter som arbetar för att leverera
            innovativa lösningar och exceptionell service till våra kunder.
          </AboutSubtitle>
        </Container>
      </AboutHero>

      <ContentSection>
        <Container>
          <ContentGrid>
            <ContentCard>
              <CardTitle>Vår Mission</CardTitle>
              <CardDescription>
                Att leverera innovativa och hållbara lösningar som hjälper våra
                kunder att nå sina mål och överträffa sina förväntningar. Vi
                strävar efter excellens i allt vi gör och bygger långsiktiga
                partnerskap baserade på förtroende och resultat.
              </CardDescription>
            </ContentCard>

            <ContentCard>
              <CardTitle>Vår Vision</CardTitle>
              <CardDescription>
                Att vara den ledande partnern inom vår bransch, känd för vår
                innovation, kvalitet och kundcentrerade approach. Vi vill forma
                framtiden genom kreativa lösningar och bidra till en bättre
                värld för kommande generationer.
              </CardDescription>
            </ContentCard>

            <ContentCard>
              <CardTitle>Våra Värderingar</CardTitle>
              <CardDescription>
                Integritet, innovation och kundnöjdhet står i centrum av allt vi
                gör. Vi tror på transparens, kontinuerlig förbättring och att
                behandla varje kund som en partner. Vårt team arbetar med
                passion och dedikation för att leverera resultat av högsta
                kvalitet.
              </CardDescription>
            </ContentCard>

            <ContentCard>
              <CardTitle>Vår Historia</CardTitle>
              <CardDescription>
                Grundat 2013 med en vision att förändra branschen, har Sourzy
                vuxit från en liten startup till en etablerad aktör. Genom åren
                har vi byggt upp expertis, utvecklat innovativa lösningar och
                skapat varaktiga relationer med kunder över hela världen.
              </CardDescription>
            </ContentCard>
          </ContentGrid>
        </Container>
      </ContentSection>

      <StatsSection>
        <Container>
          <SectionTitle style={{ color: "white" }}>
            Sourzy i siffror
          </SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Nöjda kunder</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1200+</StatNumber>
              <StatLabel>Projekt genomförda</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Kundnöjdhet</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>10+</StatNumber>
              <StatLabel>Års erfarenhet</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>
    </>
  );
};
