import * as S from './style';
import logo_footer from '@/assets/images/logo-horizontal.png';
import certificados from '@/assets/images/footer/certificados.png';

function Footer({ isHomer = false }) {
  return (
    <S.Container>
      <S.Logo src={logo_footer} alt="Logo" />
      {isHomer && (
        <>
          <S.Copyright>
            Copyright © ServUP Digital - Todos os Direitos Reservados - Política de
            Privacidade
          </S.Copyright>
          <S.Image src={certificados} alt="Certificados" />
        </>
      )}
    </S.Container>
  );
}

export default Footer;
