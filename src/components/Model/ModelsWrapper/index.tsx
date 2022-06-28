import { ReactNode } from "react";

import { Container } from "./styles";

interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  return <Container>{children}</Container>;
}

export default ModelsWrapper;
