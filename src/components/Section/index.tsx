import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useTrail, animated as a } from "react-spring";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Container } from "./styles";
import Photo from "../../assets/kit-photo.png";

interface SectionProps {
  title: string;
}

const config = { mass: 5, tension: 2000, friction: 300 };

export default function Section({ title }: SectionProps) {
  const triggerRef = useRef(null);

  const entry = useIntersectionObserver({
    elementRef: triggerRef,
    threshold: 0.3,
  });

  const titles = Array(5).fill(title);

  const [toggle, set] = useState(false);

  const trail = useTrail(titles.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useLayoutEffect(() => {
    if (entry.isIntersecting) {
      return set(entry.isIntersecting);
    }
  }, [entry.isIntersecting]);

  console.log(title, entry.isIntersecting);

  const opacityTitles: any = {
    1: "0.6",
    2: "0.3",
    3: "0.1",
    4: "0.05",
  };

  return (
    <Container>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            ref={triggerRef}
            key={x.id}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height, opacity: opacityTitles[index] }}>
              {titles[index]}
            </a.div>
          </a.div>
        ))}
      </div>
      <Image src={Photo} alt="Gradient" />
    </Container>
  );
}
