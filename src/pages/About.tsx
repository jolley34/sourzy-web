import React from "react";
import styled from "styled-components";
import { Container, Section } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

const AboutHero = styled.section`
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
  }
`;

const AboutTitle = styled.h1`
  margin: 0 auto;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.md};
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
  }
`;

const CardDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.7;
  font-size: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
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
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
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
  }
`;

const MemberRole = styled.p`
  color: ${theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${theme.spacing.sm};
  font-size: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`;

const MemberBio = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

export const About: React.FC = () => {
  return (
    <>
      <AboutHero>
        <Container>
          <AboutTitle>Om Sourzy</AboutTitle>
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

      {/*     <TeamSection>
        <Container>
          <SectionTitle>Vårt Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Karl Karlsson"
              />
              <MemberName>Karl Karlsson</MemberName>
              <MemberRole>CEO</MemberRole>
              <MemberBio>
                Med över 15 års erfarenhet leder Karl företaget med vision och
                passion. Han har en bakgrund inom teknologi och
                affärsutveckling.
              </MemberBio>
            </TeamMember>

            <TeamMember>
              <MemberImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Karl Karlsson"
              />
              <MemberName>Karl Karlsson</MemberName>
              <MemberRole>CEO</MemberRole>
              <MemberBio>
                Med över 15 års erfarenhet leder Karl företaget med vision och
                passion. Han har en bakgrund inom teknologi och
                affärsutveckling.
              </MemberBio>
            </TeamMember>

            <TeamMember>
              <MemberImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Karl Karlsson"
              />
              <MemberName>Karl Karlsson</MemberName>
              <MemberRole>CEO</MemberRole>
              <MemberBio>
                Med över 15 års erfarenhet leder Karl företaget med vision och
                passion. Han har en bakgrund inom teknologi och
                affärsutveckling.
              </MemberBio>
            </TeamMember>

            <TeamMember>
              <MemberImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Karl Karlsson"
              />
              <MemberName>Karl Karlsson</MemberName>
              <MemberRole>CEO</MemberRole>
              <MemberBio>
                Med över 15 års erfarenhet leder Karl företaget med vision och
                passion. Han har en bakgrund inom teknologi och
                affärsutveckling.
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection> */}
    </>
  );
};
