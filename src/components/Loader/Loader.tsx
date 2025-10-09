import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const LoaderWrapper = styled.div`
  position: relative;
  width: 40px;
  aspect-ratio: 1;
`;

const Triangle = styled.div<{ inverted?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  clip-path: polygon(0 0, 101% 0, 0 100%);
  --s: ${(props) => (props.inverted ? "-1, -1" : "1, 1")};
  animation: triangleAnim 2s infinite;

  @keyframes triangleAnim {
    0%,
    10% {
      transform: scale(var(--s)) translate(0, 0) rotate(0deg);
    }
    33% {
      transform: scale(var(--s)) translate(20px, -20px) rotate(0deg);
    }
    66% {
      transform: scale(var(--s)) translate(20px, -20px) rotate(180deg);
    }
    90%,
    100% {
      transform: scale(var(--s)) translate(0px, 0px) rotate(180deg);
    }
  }
`;

export default function Loader() {
  return (
    <Container>
      <LoaderWrapper>
        <Triangle />
        <Triangle inverted />
      </LoaderWrapper>
    </Container>
  );
}
