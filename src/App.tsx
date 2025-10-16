// Extend Window interface to include MSStream
interface Window {
  MSStream?: unknown;
}

import React, { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import About from "./pages/About";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { fetchMedia } from "./utils/fetchMedia";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const preloadMedia = (src: string, type: "image" | "video"): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!src) {
      resolve();
      return;
    }

    if (type === "image") {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    } else {
      const video = document.createElement("video");
      video.onloadeddata = () => resolve();
      video.onerror = () => reject(new Error(`Failed to load video: ${src}`));
      video.src = src;
      video.load();
    }
  });
};

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let scrollbarWidth = 0;

    if (isSideMenuOpen) {
      scrollYRef.current = window.scrollY;
      scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.overflow = "hidden";

      if (isIOS) {
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollYRef.current}px`;
        document.body.style.width = "100%";
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.documentElement.style.overflow = "";
      if (isIOS) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.backgroundColor = "";
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      window.scrollTo({
        top: scrollYRef.current,
        behavior: "auto",
      });
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = "";
    };
  }, [isSideMenuOpen]);

  useEffect(() => {
    const loadPageResources = async () => {
      const resourcesToLoad: Array<{ src: string; type: "image" | "video" }> =
        [];

      if (window.location.pathname === "/") {
        setIsLoading(true);
        setLoadingProgress(10);
        const [heroMedia, contentMedia] = await Promise.all([
          fetchMedia("hero"),
          fetchMedia("content"),
        ]);

        setLoadingProgress(50);

        resourcesToLoad.push(
          { src: heroMedia.mediaSrc, type: heroMedia.mediaType },
          { src: contentMedia.mediaSrc, type: contentMedia.mediaType }
        );
      } else if (window.location.pathname === "/about") {
        setIsLoading(false);
        return;
      }

      if (resourcesToLoad.length > 0) {
        try {
          await Promise.all(
            resourcesToLoad.map(({ src, type }) => preloadMedia(src, type))
          );
          setLoadingProgress(100);
          await new Promise((resolve) => setTimeout(resolve, 400));
        } catch (error) {
          console.error("Error loading resources:", error);
          setLoadingProgress(100);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }

      setIsLoading(false);
    };

    loadPageResources();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <AppContainer
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: isLoading ? "none" : "auto",
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        <Header
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const handleOpenContactSideMenu = () => {
      const contactButton = document.querySelector(
        "[data-contact-button]"
      ) as HTMLButtonElement;
      if (contactButton) {
        contactButton.click();
      }
    };

    window.addEventListener("openContactSideMenu", handleOpenContactSideMenu);
    return () =>
      window.removeEventListener(
        "openContactSideMenu",
        handleOpenContactSideMenu
      );
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <AppContent />
    </Router>
  );
};

export default App;
