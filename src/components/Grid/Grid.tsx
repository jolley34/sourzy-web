import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const theme = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "100px",
  },
  breakpoints: {
    mobile: "768px",
  },
};

const HeaderSection = styled.section`
  padding: ${theme.spacing.xxxl} 0 ${theme.spacing.xxxl} 0;
  background: rgb(29, 29, 31);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0 ${theme.spacing.lg} 0;
  }
`;

const GridSection = styled.section`
  position: relative;
  background: rgb(29, 29, 31);
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0 ${theme.spacing.xl} 0;
  }
`;

const GridHeader = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const GridTitle = styled.h2`
  font-size: 56px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.07;
  letter-spacing: -0.005em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

const GridSubtitle = styled.p`
  font-size: 28px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.14;
  letter-spacing: 0.007em;
  max-width: 800px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 21px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 90%;
  grid-column-gap: 20px;
  overflow-x: auto;
  padding-left: 77px;
  padding-right: 77px;

  margin: 0 auto;

  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
  }
`;

const GridItem = styled.div`
  position: relative;
  flex: 0 0 calc(100% - 20rem);
  scroll-snap-align: start;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  background: black;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex: 0 0 calc(100% - 2rem);
  }
`;

const GridTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.lg};
  color: white;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

const CarouselContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: -${theme.spacing.xxl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: opacity 0.3s ease;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: -${theme.spacing.lg};
  }
`;

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 20px;
  background: rgba(45, 45, 47, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 32px;
  width: fit-content;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
    fill: white;
    margin-left: ${({ children }) =>
      children?.toString().includes('path d="M8') ? "2px" : "0"};
  }
`;

const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "32px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)"};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: ${({ $active }) =>
      $active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"};
  }
`;

interface GridImage {
  src: string;
  title?: string;
  description?: string;
}

interface GridProps {
  title?: string;
  subtitle?: string;
  images?: (string | GridImage)[];
}

export const Grid: React.FC<GridProps> = ({
  title = "Get the highlights.",
  subtitle = "Heat-forged aluminum unibody design for exceptional pro capability.",
  images = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
  ],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setIsVisible(true);
          const index = Number(visible.target.getAttribute("data-index"));
          setActiveIndex(index);
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const items = container.querySelectorAll(".grid-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [images]);

  useEffect(() => {
    const handleScroll = () => {
      const gridSection = gridSectionRef.current;
      if (!gridSection) return;

      const sectionRect = gridSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const shouldBeVisible =
        sectionRect.bottom <= windowHeight && sectionRect.top <= 0;

      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % images.length;
          scrollToIndex(next);
          return next;
        });
      }, 3000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, images.length]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".grid-item");
    const item = items[index] as HTMLElement;
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <HeaderSection>
        <GridHeader>
          <GridTitle>{title}</GridTitle>
          <GridSubtitle>{subtitle}</GridSubtitle>
        </GridHeader>
      </HeaderSection>

      <GridSection ref={gridSectionRef}>
        <GridContainer ref={containerRef}>
          {images.map((image, idx) => {
            const img = typeof image === "string" ? { src: image } : image;
            return (
              <GridItem key={idx} className="grid-item" data-index={idx}>
                <img src={img.src} alt={img.title || `Grid item ${idx + 1}`} />
                {(img.title || img.description) && (
                  <GridTextOverlay>
                    {img.title && <h3>{img.title}</h3>}
                    {img.description && <p>{img.description}</p>}
                  </GridTextOverlay>
                )}
              </GridItem>
            );
          })}
        </GridContainer>
        <CarouselContainer $isVisible={isVisible}>
          <CarouselControls>
            <CarouselDots>
              {images.map((_, i) => (
                <Dot
                  key={i}
                  $active={i === activeIndex}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </CarouselDots>
            <PlayButton onClick={togglePlay}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </PlayButton>
          </CarouselControls>
        </CarouselContainer>
      </GridSection>
    </>
  );
};
