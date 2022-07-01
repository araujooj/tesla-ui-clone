import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTrail, animated as a } from "react-spring";
import { Container } from "./styles";

const items = [
  "Nosso produto",
  "Nosso produto",
  "Nosso produto",
  "Nosso produto",
  "Nosso produto",
];
const config = { mass: 5, tension: 2000, friction: 300 };

export default function Page() {
  const [toggle, set] = useState(false);

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      return set((state) => !state);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const opacityTitles: any = {
    1: "0.6",
    2: "0.3",
    3: "0.1",
    4: "0.05",
  };

  return (
    <Container className="trails-main">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height, opacity: opacityTitles[index] }}>
              {items[index]}
            </a.div>
          </a.div>
        ))}
      </div>
    </Container>
  );
}
