import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
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
`;

const MainContent = styled.main`
  flex: 1;
`;

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

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
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const loadPageResources = async () => {
      const resourcesToLoad: Array<{ src: string; type: "image" | "video" }> =
        [];

      if (location.pathname === "/") {
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
      } else if (location.pathname === "/about") {
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
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Loader />}
      <AppContainer
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Header />
        <MainContent>
          <ScrollToTop />
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
