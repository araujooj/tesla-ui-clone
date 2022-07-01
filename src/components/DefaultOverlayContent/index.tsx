import Image from "next/image";
import Parallax from "../Parallax";
import { Container, Heading, Buttons } from "./styles";

interface DefaultOverlayContentProps {
  label: string;
  description: string;
}

function DefaultOverlayContent({
  label,
  description,
}: DefaultOverlayContentProps) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Parallax clampFinal>
        <Image
          alt="Github Profile"
          width="120px"
          height="120px"
          style={{ borderRadius: "50%" }}
          src="https://github.com/araujooj.png"
        />
        <Image
          alt="Github Profile"
          width="120px"
          height="120px"
          style={{ borderRadius: "50%" }}
          src="https://github.com/araujooj.png"
        />
        <Image
          alt="Github Profile"
          width="120px"
          height="120px"
          style={{ borderRadius: "50%" }}
          src="https://github.com/araujooj.png"
        />
      </Parallax>
      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
}

export default DefaultOverlayContent;
