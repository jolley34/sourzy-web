import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMedia } from "../../utils/fetchMedia";
import {
  CTAButton,
  HeroContainer,
  HeroContent,
  HeroCTA,
  HeroSubtitle,
  HeroTitle,
  HeroVideo,
} from "./Hero.styling";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const [media, setMedia] = useState<{
    mediaType: "image" | "video";
    mediaSrc: string;
  }>({
    mediaType: "video",
    mediaSrc: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { mediaType, mediaSrc } = await fetchMedia("hero");
        setMedia({ mediaType, mediaSrc });
      } catch (error) {
        console.error("Error fetching hero media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleContact = () => {
    const event = new CustomEvent("openContact");
    window.dispatchEvent(event);
  };

  if (loading) {
    return null;
  }

  return (
    <HeroContainer mediaType={media.mediaType} mediaSrc={media.mediaSrc}>
      {media.mediaType === "video" && (
        <HeroVideo autoPlay loop muted playsInline src={media.mediaSrc} />
      )}
      <HeroContent>
        <HeroTitle>Your sourcing partner</HeroTitle>
        <HeroSubtitle>
          At Sourzy, we are passionate about simplifying and strengthening trade
          within industrial automation. We act as a partner, building bridges
          between suppliers and companies across the globe.
        </HeroSubtitle>
        <HeroCTA>
          <CTAButton onClick={handleLearnMore}>Read More</CTAButton>
          <CTAButton $variant="secondary" onClick={handleContact}>
            Contact us
          </CTAButton>
        </HeroCTA>
      </HeroContent>
    </HeroContainer>
  );
};
