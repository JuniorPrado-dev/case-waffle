import Header from "../../components/Header";
import * as S from "./style";
import Footer from '@/components/Footer';
import ResetPassword from '@/components/ResetPassword';


const ResetPasswordPage = () => {

    return (
        <S.Container>
            <Header isHomer={false}/>

            <S.MainContent>

                <ResetPassword />

            </S.MainContent>

            <Footer />

        </S.Container>
    );
};


export default ResetPasswordPage;