import styled from 'styled-components';

// components/UserForm/style.ts
import { Form } from "formik";
import COLORS from '@/constants/colors';
import { device } from '@/utils/sizeDevices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 50%;
  margin: 0px auto; 
  padding: 50px; 
  @media ${device.mobileM} {
    width: 95vw;
    margin: 0px auto; 
    padding: 10px; 
    max-width: 80vw;
      }
`;


export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 5px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  font-family: 'Montserrat', sans-serif;
  appearance: none;

  &:hover {
    background-color: ${COLORS.lightBlue};
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #b0c4de;
    color: #e0e0e0;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ErrorText = styled.div`
  color: #d9534f;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
  font-family: "Montserrat", sans-serif;
`;


