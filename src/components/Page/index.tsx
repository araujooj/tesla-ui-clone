import DefaultOverlayContent from "../DefaultOverlayContent";
import ModelSection from "../Model/ModelSection";
import ModelsWrapper from "../Model/ModelsWrapper";
import { Container } from "./styles";

function Page() {
  const models = [
    "Model One",
    "Model Two",
    "Model Three",
    "Model Four",
    "Model Five",
    "Model X",
    "Model S",
  ];

  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((model) => (
            <ModelSection
              key={model}
              className="colored"
              modelName={model}
              overlayNode={
                <DefaultOverlayContent
                  label={model}
                  description="Order online for delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
