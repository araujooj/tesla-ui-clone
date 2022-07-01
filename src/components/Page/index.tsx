import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useIntersectionObserver } from "../../hooks/useIntersecionObserver";
import ModelsWrapper from "../Model/ModelsWrapper";
import Section from "../Section";
import { Container } from "./styles";

function Page() {
  const triggerRef = useRef(null);

  const dataRef = useIntersectionObserver({
    elementRef: triggerRef,
    freezeOnceVisible: false,
  });

  return (
    <Container>
      <ModelsWrapper>
        <Section
          label="Nosso produto"
          triggerRef={triggerRef}
          dataRef={dataRef}
          visibleInFirstRender
        />
        <Section
          label="Nossa liderança"
          triggerRef={triggerRef}
          dataRef={dataRef}
        />
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
