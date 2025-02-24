// import { useAppDispatch } from "@/redux/hooks";
// import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";


import ChartCard from "../ChartCard";

import * as S from "./style";
import { useEffect, useState } from "react";
import { getReport } from "@/services/admin";

import {iconsChart} from "@/assets/images/icons/chart"


export default function General () {

  const user = useAppSelector((state) => state.user.value);

  const [report, setReport] = useState<TypeReport>({
    totalOrders: 0,
    cancelOrders: 0,
    usersQuantity: 0,
    professionalsQuantity: 0
  })

  useEffect(() => {
      const fetchReport = async () => {
        const report = await getReport();
        console.log(report);
        if (report) {
          setReport(report);
        }
      };
  
      fetchReport();
    }, []);

  return (
    <S.Container>

      <S.TopContainer>

      <S.Tittle>Painel de Controle</S.Tittle>
      <S.Description>Olá, {user.name}, bem vind@ ao painel de controle</S.Description>

      </S.TopContainer>

      <S.ChartCardContainer>

        <ChartCard 
        isUp 
        image = {iconsChart.item_1}
        title={report.totalOrders.toString()} 
        description="Total de pedidos" 
        percentValue={100} 
        />

        <ChartCard 
        isUp={false} 
        image = {iconsChart.item_3}
        title={report.cancelOrders.toString()}
        description="Total de pedidos cancelados" 
        percentValue={ report.totalOrders !== 0 ? (report.cancelOrders/report.totalOrders) * 100 : 0} 
        />

        <ChartCard 
        isUp={true}
        image = {iconsChart.item_4}
        title={report.usersQuantity.toString()}
        description="Total de usuários cadastrados"
        percentValue={100} 
        />

        <ChartCard 
        isUp ={true}
        image = {iconsChart.item_2}
        title={report.professionalsQuantity.toString()} 
        description={"Total de profissionais cadastrados"}
        percentValue={ report.usersQuantity !== 0 ? (report.professionalsQuantity/report.usersQuantity) * 100 : 0} 
        />

      </S.ChartCardContainer>
      

    </S.Container>
  );
}
