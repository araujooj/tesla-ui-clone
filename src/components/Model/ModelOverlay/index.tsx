import { useTransform } from "framer-motion";
import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { CarModel } from "../../../contexts/ModelsContext";
import useWrapperScroll from "../../../hooks/useWrapperScroll";

import { Container } from "./styles";

interface ModelOverlayProps {
  children: ReactNode;
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

export function ModelOverlay({ children, model }: ModelOverlayProps) {
  const { scrollY } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetHeight: model.sectionRef.current?.offsetHeight,
      offsetTop: model.sectionRef.current?.offsetTop,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      const dimensions = getSectionDimensions();

      window.requestAnimationFrame(() => setDimensions(dimensions));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getSectionDimensions]);

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  // When the scroll hits 42% of the section, the opacity begins to change.
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );

  console.log("OPACITY", opacity.get());

  console.log("POINTER EVENTS", pointerEvents.get());

  return (
    <Container opacity={opacity.get()} pointerEvents={pointerEvents.get()}>
      {children}
    </Container>
  );
}
