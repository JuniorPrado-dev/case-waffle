import { useEffect, useState } from "react";
import * as S from "./style";
import ComicBubble from "../ComicBubble";
import COLORS from "@/constants/colors";
import { FaArrowRight } from "react-icons/fa";

interface ComicBubbleProps {
  imageUrl: string; // URL da imagem
  text: string;     // Texto que será exibido no balão
}
interface Props {
  withArrow?: boolean;
  components: ComicBubbleProps[] ;
}
export default function SLider({ components, withArrow = false }: Props) {
  const [opacity, setOpacity] = useState(1);
  const [posi, setPosi] = useState(0);

  const pisca = () => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
    }, 1000);
  };
  // animação
  useEffect(() => {
    const interval = setInterval(() => {
      const newposi = posi - 100;
      if (posi > (components.length - 1) * -100) {
        setPosi(newposi);
      } else {
        pisca();
        setPosi(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const toLeft = () => {
    if (posi == -300) {
      setPosi(0);
    } else {
      setPosi(posi - 100);
    }
  };
  const toRight = () => {
    if (posi == 0) {
      setPosi(-300);
    } else {
      setPosi(posi + 100);
    }
  };

  return (
    <>
      {withArrow && (
        <S.ContSeta>
          <S.ImageSeta $top={25} $left={2.5} $right={0} onClick={toRight}>
          </S.ImageSeta>
          <S.ImageSeta $top={20} $left={0} $right={2.5} onClick={toLeft}>
            <FaArrowRight size={100} color={COLORS.yellow}/>
          </S.ImageSeta>
        </S.ContSeta>
      )}
      <S.Container $op={opacity}>
        <S.ContainerBanner>
          <S.InternalContainerBanner $p={posi}>
            {components.length > 0 &&
              components.map((content, index) => (
                <ComicBubble
                  imageUrl={content.imageUrl}
                  text={content.text}
                  key={index}
                />
              ))}
          </S.InternalContainerBanner>
        </S.ContainerBanner>
      </S.Container>
    </>
  );
}
