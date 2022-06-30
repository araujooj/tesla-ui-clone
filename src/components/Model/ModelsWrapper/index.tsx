import { useEffect } from "react";
import { ReactNode, useCallback, useContext, useRef, useState } from "react";
import ModelsContext, { CarModel } from "../../../contexts/ModelsContext";
import { ModelOverlay } from "../ModelOverlay";

import { Container, OverlayRoot } from "./styles";

interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((oldState) => [...oldState, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((oldState) =>
      oldState.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find((model) => model.modelName === modelName);
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        getModelByName,
        registeredModels,
        registerModel,
        unregisterModel,
        wrapperRef,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredModels.map((model) => (
            <ModelOverlay model={model} key={model.modelName}>
              {model.overlayNode}
            </ModelOverlay>
          ))}
        </OverlayRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
}

export default ModelsWrapper;
