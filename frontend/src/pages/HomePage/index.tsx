import Header from "@/components/Header";
import * as S from "./style";
import imageDetective from "@/assets/images-detective";
import ComicBubble from "@/components/ComicBubble";

export default function HomePage() {
  const narration = [
    {
      imageUrl: imageDetective.escondido,
      text: "Oi!... Aqui Atráz dos harbustos!... Estou no meio de uma investigação! Preciso da sua ajuda! ",
    },
    {
      imageUrl: imageDetective.escondido,
      text: "Oi!... Aqui Atráz dos harbustos!... Estou no meio de uma investigação! Preciso da sua ajuda! ",
    },
    {
      imageUrl: imageDetective.escondido,
      text: "Oi!... Aqui Atráz dos harbustos!... Estou no meio de uma investigação! Preciso da sua ajuda! ",
    },
  ];

  return (
    <S.Container>
      <Header home />
      <S.MainContent>
        <ComicBubble imageUrl={narration[0].imageUrl} text={narration[0].text} />
      </S.MainContent>
    </S.Container>
  );
}
