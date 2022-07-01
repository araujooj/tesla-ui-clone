import { Container } from "./styles";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Section({ children, ...props }: SectionProps) {
  // const sectionRef = useRef<HTMLDivElement>(null);

  // const { registerModel } = useModel(modelName);

  // useEffect(() => {
  //   if (sectionRef.current) {
  //     registerModel({
  //       modelName,
  //       overlayNode,
  //       sectionRef,
  //     });
  //   }
  // }, [modelName, overlayNode, sectionRef, registerModel]);

  return <Container {...props}>{children}</Container>;
}

export default Section;
