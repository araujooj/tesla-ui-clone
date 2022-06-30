import { MotionValue } from "framer-motion";
import styled from "styled-components";

interface ContainerProps {
  opacity: number;
  pointerEvents: "none" | "auto";
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -100vh;

  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointerEvents};
`;
