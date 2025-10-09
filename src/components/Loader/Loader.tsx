import React from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps {
  progress?: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleOuter = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 3px solid transparent;
  border-top-color: #242424;
  border-right-color: #2f2f2f;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

const CircleInner = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border: 3px solid transparent;
  border-bottom-color: #2f2f2f;
  border-left-color: #2f2f2f;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite reverse;
`;

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2f2f2f 0%, #2f2f2f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #515151 0%, #2f2f2f 100%);
  border-radius: 2px;
  transition: width 0.3s ease-out;
  width: ${(props) => props.progress}%;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const ProgressText = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const Loader: React.FC<LoaderProps> = ({ progress = 0 }) => {
  return (
    <LoaderOverlay>
      <LoaderContent>
        <LogoContainer>
          <CircleOuter />
          <CircleInner />
          <LogoText>S</LogoText>
        </LogoContainer>

        <div>
          <ProgressBarContainer>
            <ProgressBarFill progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </div>
      </LoaderContent>
    </LoaderOverlay>
  );
};

export default Loader;
