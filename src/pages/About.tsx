import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const theme = {
  colors: {
    surface: "#f5f5f7",
    background: "#ffffff",
    text: "#1d1d1f",
    textLight: "#86868b",
    primary: "#0071e3",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  shadows: {
    sm: "0 2px 8px rgba(0,0,0,0.1)",
    md: "0 4px 16px rgba(0,0,0,0.12)",
    lg: "0 8px 32px rgba(0,0,0,0.15)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const Section = styled.section`
  padding: ${theme.spacing.xl} 0;
`;

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
  opacity: 0;
  transform: translateY(30px);

  &.visible {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const StatCard = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
`;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing.xs};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
  max-width: 300px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    text-align: center;
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

const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  background: black;
  min-height: 100vh;
  width: 100%;

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

const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<Element>>(
    new Set()
  );
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (index: number) => (el: HTMLDivElement | null) => {
    elementsRef.current[index] = el;
  };

  const isVisible = (index: number) => {
    const el = elementsRef.current[index];
    return el ? visibleElements.has(el) : false;
  };

  return { isVisible, addRef };
};

export default function About() {
  const { isVisible, addRef } = useScrollAnimation();

  return (
    <>
      <AboutSection>
        <AboutLabel>Sourzy</AboutLabel>
        <AboutTitle>
          Component Sourcing Solutions. <br />
          Engineered for Supply Chain <br />
          Excellence.
        </AboutTitle>
        <AboutDescription>
          Introducing a strategic approach to component procurement and cost
          optimization, designed to ensure uninterrupted production and maximize
          value. Through our extensive global supplier networks and deep
          industry expertise, we deliver reliable sourcing solutions that reduce
          costs while maintaining the highest quality standards.
        </AboutDescription>
      </AboutSection>

      <AboutHero>
        <Container>
          <AboutTitleSecondary>Global Partnership Network</AboutTitleSecondary>
          <AboutSubtitle>
            We leverage strategic relationships with suppliers worldwide to
            secure competitive pricing and reliable component access. Our
            extensive partner network enables us to negotiate better rates,
            source hard-to-find parts, and deliver cost-effective solutions that
            keep your production on track.
          </AboutSubtitle>
        </Container>
      </AboutHero>

      <ContentSection>
        <Container>
          <ContentGrid>
            <ContentCard
              ref={addRef(0)}
              className={isVisible(0) ? "visible" : ""}
              style={{ animationDelay: "0.1s" }}
            >
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To deliver reliable component sourcing solutions that keep
                production running and costs optimized. We strive for excellence
                in procurement, building long-term partnerships based on trust,
                competitive pricing, and unwavering supply chain reliability.
              </CardDescription>
            </ContentCard>

            <ContentCard
              ref={addRef(1)}
              className={isVisible(1) ? "visible" : ""}
              style={{ animationDelay: "0.2s" }}
            >
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To be the premier strategic sourcing partner in the industry,
                recognized for our global reach, cost optimization expertise,
                and proactive supply chain solutions. We aim to shape the future
                of component procurement through innovation and reliability.
              </CardDescription>
            </ContentCard>

            <ContentCard
              ref={addRef(2)}
              className={isVisible(2) ? "visible" : ""}
              style={{ animationDelay: "0.3s" }}
            >
              <CardTitle>Our Values</CardTitle>
              <CardDescription>
                Transparency, reliability, and client success drive everything
                we do. We believe in honest communication, continuous market
                intelligence, and treating every client as a strategic partner.
                Our team works with dedication to deliver cost savings and
                uninterrupted supply.
              </CardDescription>
            </ContentCard>

            <ContentCard
              ref={addRef(3)}
              className={isVisible(3) ? "visible" : ""}
              style={{ animationDelay: "0.4s" }}
            >
              <CardTitle>Our Story</CardTitle>
              <CardDescription>
                Founded in 2013 with a vision to revolutionize component
                sourcing, Sourzy has grown from a startup to an established
                industry player. Over the years, we've built deep supplier
                relationships, developed market expertise, and helped clients
                worldwide optimize their supply chains.
              </CardDescription>
            </ContentCard>
          </ContentGrid>
        </Container>
      </ContentSection>

      <StatsSection>
        <Container>
          <SectionTitle style={{ color: "white" }}>Our Services</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>Cost Reduction</StatNumber>
              <StatLabel>
                Discover cost-effective alternatives with equivalent quality to
                reduce your Bill of Materials.
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>Component Sourcing</StatNumber>
              <StatLabel>
                Source obsolete or difficult-to-find components to maintain
                uninterrupted production.
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>Shortage Mitigation</StatNumber>
              <StatLabel>
                Minimize the effects of supply shortages with comparable or
                superior quality substitutes.
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>Global Supplier Networks</StatNumber>
              <StatLabel>
                Leverage international partnerships to access high-quality
                components at competitive prices.
              </StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>
    </>
  );
}
