import { useRef } from "react";
import { useEffect } from "react";
import { useModel } from "../../../hooks/useModel";
import { Container } from "./styles";

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
  children?: React.ReactNode;
}

function ModelSection({
  modelName,
  overlayNode,
  children,
  ...props
}: ModelSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { registerModel } = useModel(modelName);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, sectionRef, registerModel]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}

export default ModelSection;
