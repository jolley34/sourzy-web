import React, { useEffect, useState } from "react";
import { CarouselSlide as CarouselSlideType } from "../../types";
import {
  CarouselButton,
  CarouselContainer,
  CarouselDot,
  CarouselDots,
  CarouselSlide,
  CarouselWrapper,
  SlideContent,
  SlideImage,
  SlideTitle,
} from "./Carousel.styling";

const slides: CarouselSlideType[] = [
  {
    id: 1,
    title: "Innovation är vår passion",
    content:
      "Vi strävar ständigt efter att utveckla nya och kreativa lösningar som överträffar förväntningarna och driver branschen framåt.",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    title: "Kvalitet i varje detalj",
    content:
      "Varje projekt genomförs med högsta precision och omsorg. Vi kompromissar aldrig med kvalitet och leverans.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    title: "Kundnöjdhet är vår prioritet",
    content:
      "Vi bygger långsiktiga relationer genom att alltid sätta våra kunders behov och framgång i centrum av allt vi gör.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
  },
];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            $isActive={index === currentSlide}
            $slideIndex={index}
            $currentIndex={currentSlide}
          >
            {slide.image && <SlideImage src={slide.image} alt={slide.title} />}
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideContent>{slide.content}</SlideContent>
          </CarouselSlide>
        ))}

        <CarouselButton
          $direction="left"
          onClick={prevSlide}
          aria-label="Föregående slide"
        >
          ←
        </CarouselButton>
        <CarouselButton
          $direction="right"
          onClick={nextSlide}
          aria-label="Nästa slide"
        >
          →
        </CarouselButton>
      </CarouselWrapper>

      <CarouselDots>
        {slides.map((_, index) => (
          <CarouselDot
            key={index}
            $active={index === currentSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Gå till slide ${index + 1}`}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};
