import styled from 'styled-components';

// components/UserForm/style.ts
import { Form } from "formik";
import { device } from "@/utils/sizeDevices";
import COLORS from "@/constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${COLORS.yellow};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 50vw;
  max-width: 80%;
  @media ${device.mobileM} {
    width:90vw;
    padding: 10px;
    max-width: 100vw;
    }
  
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${COLORS.brown};
  margin-bottom: 20px;
  font-weight: 800;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  @media ${device.mobileM} {
    font-size: 20px;
  }

`;

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorText = styled.div`
  color: #d9534f;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
  font-family: "Montserrat", sans-serif;
`;


