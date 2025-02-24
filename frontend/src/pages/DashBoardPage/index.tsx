// // import { useAppDispatch } from "@/redux/hooks"
// // import { useEffect } from "react"
// // import { useNavigate } from "react-router-dom"
// // import authorizationPage from "@/services/authorizationPage"

// // export default function DashBoardPage() {

// //   return (
// //     <h1>DashBoard</h1>
// //   )
// // }
// import React, { useEffect, useState } from "react";
// import * as S from "./style";
// import General from "@/components/General";
// import Orders from "@/components/Orders";
// import Profile from "@/components/Profile";
// import { useNavigate } from "react-router-dom";
// import Alert from "@/components/Alert";
// import professionalMessage from "@/assets/images/profissao.png";
// import authorizationPage from "@/services/authorizationPage";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import Header from "@/components/Header";
// import UserMenuDash from "@/components/UserMenuDash";
// import ProfessionalMenuDash from "@/components/ProfessionalMenuDash";
// import Professions from "@/components/Professions";
// import Coins from "@/components/Coins";
// import { clearProfessional, updateProfessional } from "@/services/professional";
// import Services from "@/components/ServiceComponent";
// import AdminMenuDash from "@/components/AdminMenuDash";
// import Categories from "@/components/Categories";
// import UserControl from "@/components/UserControl";
// import OrderDetail from "@/components/OrderDetail";
// import ServiceDetail from "@/components/ServiceDetail";
// import QuotationForm from "@/components/QuotationForm";

// const DashBoardPage: React.FC = () => {
//   // const orderDetail = useAppSelector((state) => state.orderDetail.value);
//   // const user = useAppSelector((state) => state.user.value);
//   // const visibleMenu = useAppSelector((state) => state.menuState.value.visible);
//   // const serviceDetail = useAppSelector((state) => state.serviceDetail.value);
//   // const [selectedMenu, setSelectedMenu] = useState("orders");
//   // const [visibleAlert, setVisibleAlert] = useState(false);
//   // const dispatch = useAppDispatch();
//   // const navigate = useNavigate();
  
  
//   // useEffect(() => {
//   //   authorizationPage(dispatch, navigate);
//   // }, [dispatch, navigate]);
  
//   // useEffect(() => {
//   //   if (user.is_professional) {
//   //     updateProfessional(dispatch);
//   //   } else {
//   //     clearProfessional(dispatch);
//   //   }
//   //   if (!user.is_professional) {
//   //     setVisibleAlert(true);
//   //   }else{
//   //     setVisibleAlert(false);
//   //   }
//   // }, [user]);


//   // const renderContent = () => {
//   //   switch (selectedMenu) {
//   //     case "orders":
//   //       return orderDetail.id ? <OrderDetail /> : <Orders />;
//   //     case "profile":
//   //       return <Profile />;
//   //     case "professions":
//   //       return <Professions />;
//   //     case "services":
//   //       return serviceDetail.id ? (
//   //         <ServiceDetail setSelectMenu={setSelectedMenu} />
//   //       ) : (
//   //         <Services />
//   //       );
//   //     case "coins":
//   //       return <Coins />;
//   //     case "general":
//   //       return <General />;
//   //     case "categories":
//   //       return <Categories />;
//   //     case "userControl":
//   //       return <UserControl />;
//   //     case "quotation":
//   //       return <QuotationForm />;
//   //     default:
//   //       return <General/>;
//   //   }
//   // };

//   return (
//     <S.Container>
//       <Alert
//         visible={visibleAlert}
//         setVisible={setVisibleAlert}
//         imageUrl={professionalMessage}
//         fullHeight
//         buttons={[
//           {
//             label: "Deixar pra Depois",
//             onClick() {
//               setVisibleAlert(false);
//             },
//           },
//           {
//             label: "Ser um Profissional",
//             onClick() {
//               setSelectedMenu("professions");
//               setVisibleAlert(false);
//             },
//           },
//         ]}
//       />
//       <Header isDashboard />
//       <S.Body>
//         <S.MenuContainer
//           isVisible={visibleMenu}
//         >
//           <UserMenuDash
//             selectedMenu={selectedMenu}
//             setSelectedMenu={setSelectedMenu}
//           />
//           <ProfessionalMenuDash
//             selectedMenu={selectedMenu}
//             setSelectedMenu={setSelectedMenu}
//           />
//           {user.is_admin && (
//             <AdminMenuDash
//               selectedMenu={selectedMenu}
//               setSelectedMenu={setSelectedMenu}
//             />
//           )}
//         </S.MenuContainer>
//         <S.Content>{renderContent()}</S.Content>
//       </S.Body>
//     </S.Container>
//   );
// };

// export default DashBoardPage;
