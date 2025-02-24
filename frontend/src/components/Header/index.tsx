import { goToHome, goToLogin } from "@/routers/Coordinator";
import * as S from "./style";
import logo from "@/assets/images/logo.jpeg";
import { useNavigate } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
import COLORS from "@/constants/colors";
import { BiSolidLogIn } from "react-icons/bi";

interface Props {
  home?: Boolean;
}
export default function Header({ home = false }: Props) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        {!home ? (
          <S.ContentBox>
            <FaArrowCircleLeft
              size={100}
              color={COLORS.yellow}
              onClick={() => goToHome(navigate)}
            />
          </S.ContentBox>
        ) : (
          <S.ContentBox>
            <S.Text>login</S.Text>
            <BiSolidLogIn
              size={100}
              color={COLORS.yellow}
              onClick={() => goToLogin(navigate)}
            />
          </S.ContentBox>
        )}
        <S.Text>SherloWaffleHome</S.Text>
        <S.Logo src={logo} />
      </S.Content>
    </S.Container>
  );
}
