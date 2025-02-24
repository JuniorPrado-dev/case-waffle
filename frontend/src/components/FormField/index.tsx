/* eslint-disable @typescript-eslint/no-explicit-any */
// components/FormField/index.tsx
import React, { useState } from "react";
import * as S from "./style";
import { FaEyeSlash } from "react-icons/fa";
import { TbEyeSpark } from "react-icons/tb";


interface FormFieldInputProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string | undefined;
  keyboardType?: React.HTMLInputTypeAttribute;
  secureTextEntry?: boolean;
  multiline?: boolean;
  error?: string;
  touched?: boolean;
}

export const FormFieldInput: React.FC<FormFieldInputProps> = ({
  placeholder,
  onChangeText,
  label,
  onBlur,
  value,
  keyboardType = "text",
  secureTextEntry = false,
  multiline = false,
  error,
  touched,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.StyledTextInput
          as={multiline ? "textarea" : "input"}
          placeholder={placeholder}
          onChange={(e: any) => onChangeText(e.target.value)}
          onBlur={onBlur}
          value={value}
          type={
            secureTextEntry && value && !isPasswordVisible
              ? "password"
              : keyboardType
          }
          multiline={multiline}
        />
        {secureTextEntry && (
          <S.ToggleButton
            type="button"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
          >            
               { isPasswordVisible ? <TbEyeSpark />                : <FaEyeSlash />}

          </S.ToggleButton>
        )}
      </S.InputContainer>
      {error && touched && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};

interface Option {
  id?: string;
  label: string;
  value: string;
}

interface FormFieldSelectProps {
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  error?: string;
  touched?: boolean;
}

export const FormFieldSelect: React.FC<FormFieldSelectProps> = ({
  options,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  return (
    <S.Container>
      <S.Label>{placeholder}</S.Label>
      <S.SelectContainer>
        <S.StyledSelect
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          value={value || ""}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.StyledSelect>
      </S.SelectContainer>
      {error && touched && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};


interface FormButtonProps{
  isDisable?:boolean;
  onClick: () => void;
  type?: "button" | "reset" | "submit" | undefined;
  text?: string;
}

export const FormButton = ({onClick,text="Enviar",isDisable=false,type="button"}:FormButtonProps)=>{
  return <S.Button
      isDisabled={isDisable}
      type={type}
      onClick={() => onClick()}
>
  {text}
</S.Button>
}