// import Header from "../../components/Header";
// import BannerRotativo from "../../components/BannerRotativo";
// import * as S from "./style";
// import SearchMenu from "@/components/SearchMenu";
// import { useEffect } from "react";
// import { updateCategoryList } from "@/services/categories";
// import { useAppDispatch } from "@/redux/hooks";
// import BannerBottom from "@/components/BannerBottom";
// import Main from "@/components/Main";
// import Footer from "@/components/Footer";
// import { updateUser } from "@/services/users";
// import imagesTop from "@/assets/images/topBanner";
// import imagesBotton from "@/assets/images/bottomBanner";
// export default function HomePage() {
  //   const dispatch = useAppDispatch();
  
  //   useEffect(() => {
    //     updateCategoryList(dispatch);
    //     updateUser(dispatch);
    //   }, []);
    //   const imagesUP=imagesTop
    //   return (
      //     <S.Container>
      //       <Header isHomer />
      //       <S.MainContent>
      //         <BannerRotativo images={imagesUP} />
      //         <SearchMenu />
      //         <Main />
      //         <BannerBottom
      //           images={imagesBotton}
      //         />
      //       </S.MainContent>
      //       <Footer isHomer={true} /> {/* Footer fixo no final */}
      //     </S.Container>
      //   );
      // }
      
      export default function HomePage() {
        return(<h1>HOME</h1>)
      }