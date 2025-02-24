// components/FormField/style.ts

import COLORS from '@/constants/colors';
import { device } from '@/utils/sizeDevices';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;


export const InputContainer = styled.div`
  max-width: 97%;
  position: relative;
  background-color: white;
`;

export const SelectContainer = styled.div`
  position: relative;
  background-color: white;
`;

export const StyledTextInput = styled.input<{ multiline?: boolean }>`
  width: 100%;
  padding: 12px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${COLORS.lightGrey};
  background-color: ${COLORS.white};
  color: ${COLORS.brown};
  resize: ${(props) => (props.multiline ? 'vertical' : 'none')};
  height: ${(props) => (props.multiline ? 'auto' : '40px')};
  min-height: ${(props) => (props.multiline ? '100px' : '20px')};
  font-family: 'Montserrat', sans-serif;
  
  &:focus {
    border-color: ${COLORS.lightBlue};
    box-shadow: 0px 0px 5px rgba(74, 144, 226, 0.5);
    outline: none;
  }
  @media ${device.mobileM} {
    padding: 10px 0px;
    font-size: 16px;
      }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: block;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;


export const StyledSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  appearance: none;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0px 0px 5px rgba(74, 144, 226, 0.5);
    outline: none;
  }

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;


interface ButtonProps{
  isDisabled: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 12px 20px;
  margin-top: 2px;
  background-color:${(props)=>props.isDisabled?COLORS.buttonDisableBackground: COLORS.buttonEnableBackground};
  color:${(props)=>props.isDisabled?COLORS.buttonDisableColor: COLORS.buttonEnableColor};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color:${(props)=>props.isDisabled?COLORS.buttonDisableBackground: "#357abd"};
    transform:${(props)=>props.isDisabled?1: 1.03};
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


export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const PasswordIcon = styled.img`
  width: 40px;
  height: 40px;
  @media ${device.mobileM} {
    width: 20px;
    height: 20px;
      }
`;

export const ErrorText = styled.span`
  color: ${COLORS.red};
  font-size: 14px;
  margin-top: 8px;
  display: block;
`;
