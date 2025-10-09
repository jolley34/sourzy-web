import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMedia } from "../../utils/fetchMedia";
import {
  ContentButton,
  ContentContainer,
  ContentDescription,
  ContentImage,
  ContentImageWrapper,
  ContentSection,
  ContentText,
  ContentTitle,
} from "./Content.styling";

export const Content: React.FC = () => {
  const navigate = useNavigate();

  const [media, setMedia] = useState<{
    mediaType: "image" | "video";
    mediaSrc: string;
  }>({
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { mediaType, mediaSrc } = await fetchMedia("content");
        setMedia({ mediaType, mediaSrc: mediaSrc || media.mediaSrc });
      } catch (error) {
        console.error("Error fetching content media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLearnMore = () => {
    navigate("/about");
  };

  if (loading) {
    return null;
  }

  return (
    <ContentSection>
      <ContentContainer>
        <ContentText>
          <ContentTitle>Our Story</ContentTitle>
          <ContentDescription>
            Sourzy grundades med visionen att revolutionera branschen genom
            innovativa lösningar och exceptionell kundservice. Vi har byggt vårt
            rykte på pålitlighet, kvalitet och en djup förståelse för våra
            kunders behov.
          </ContentDescription>
          <ContentDescription>
            Vårt team arbetar outtröttligt för att leverera resultat som
            överstiger förväntningarna och driver verklig förändring för våra
            kunder.
          </ContentDescription>
          <ContentButton onClick={handleLearnMore}>
            Läs mer om oss
          </ContentButton>
        </ContentText>
        <ContentImageWrapper>
          {media.mediaType === "image" ? (
            <ContentImage
              src={media.mediaSrc}
              alt="Sourzy team working together"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={media.mediaSrc}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          )}
        </ContentImageWrapper>
      </ContentContainer>
    </ContentSection>
  );
};
