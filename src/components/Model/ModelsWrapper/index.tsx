import {
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useScroll } from "react-use";
import ModelsContext, { CarModel } from "../../../contexts/ModelsContext";

import { Container } from "./styles";

interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  return <Container>{children}</Container>;
}

export default ModelsWrapper;
