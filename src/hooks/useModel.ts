import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "../contexts/ModelsContext";

export const useModel = (modelName: string) => {
  const { unregisterModel, registerModel, getModelByName } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisterModel(modelName),
    [modelName, unregisterModel]
  );

  const getModel = useCallback(() => {
    getModelByName(modelName);
  }, [modelName, getModelByName]);

  return {
    registerModel,
    getModel,
  };
};
