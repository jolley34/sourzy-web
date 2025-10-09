import React, { useEffect } from "react";
import { Content } from "../components/Content/Content";
import { Hero } from "../components/Hero/Hero";

export const Home: React.FC = () => {
  useEffect(() => {
    const handleOpenContact = () => {
      const event = new CustomEvent("openContactSideMenu");
      window.dispatchEvent(event);
    };

    window.addEventListener("openContact", handleOpenContact);
    return () => window.removeEventListener("openContact", handleOpenContact);
  }, []);

  return (
    <>
      <Hero />
      {/*  <Section>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#0f172a",
              }}
            >
              Vad våra kunder säger
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Läs vad våra nöjda kunder har att säga om våra tjänster och
              lösningar
            </p>
          </div>
          <Carousel />
        </div>
      </Section> */}
      <Content />
    </>
  );
};
