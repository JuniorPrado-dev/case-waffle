import { goToHome } from "@/routers/Coordinator";
import * as S from "./style";
import logo from "@/assets/images/logo.jpeg";
import { useNavigate } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
import COLORS from "@/constants/colors";


export default function Header() {
const navigate= useNavigate()
  return (
    <S.Container>
      <S.Back onClick={() => goToHome(navigate)} >
        <FaArrowCircleLeft size={100} color={COLORS.yellow} />
      <S.Logo src={logo} />
      </S.Back>
    </S.Container>
  );
}
