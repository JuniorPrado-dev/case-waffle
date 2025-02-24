/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik } from "formik";
import * as S from "./style";
import { FormButton, FormFieldInput} from "../FormField";
import { validationUserForm } from "@/utils/validationSchemas";
import { userRegistration } from "@/services/users";
import Alert from "../Alert";
import { goToLogin } from "@/routers/Coordinator";
import { useNavigate } from "react-router-dom";
import { UserRole } from "@/utils/enums";

const UserForm: React.FC = () => {
  const initialValues: TypeUserRequest = {
    name: "",
    password:"",
    email: "",
    role: UserRole.USER,
   };


  const navigate = useNavigate();
  // const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOnSubmit, setIsVisibleOnSubmit] = useState(false);
  const [dataModal, setDataModal] = useState({
    status: "",
    detail: "",
  });

  const handleSubmit = async (values: TypeUserRequest) => {
    const response = await userRegistration(values);
    
    if (response && response.status) {
      setIsVisibleOnSubmit(true);
      setDataModal({
        status: response.status,
        detail: response.detail,
      });
    }
  };

  return (
    <S.Container>
      <Alert
        visible={isVisibleOnSubmit}
        setVisible={setIsVisibleOnSubmit}
        title={dataModal.status}
        content={dataModal.detail}
        buttons={[
          {
            label: "Ok",
            onClick:
              dataModal.status !== "error"
                ? () => {
                    goToLogin(navigate);
                    setIsVisibleOnSubmit(false);
                  }
                : () => {
                    setIsVisibleOnSubmit(false);
                  },
          },
        ]}
      />
      <S.Title>Credenciamento de novo detective</S.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationUserForm}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          values,
          errors,
          touched,
        }) => (
          <S.FormStyled>
            <FormFieldInput
              label="Nome"
              placeholder="Nome Completo"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={errors.name}
              touched={touched.name}
            />

            <FormFieldInput
              label="Email"
              placeholder="exemplo@gmail.com"
              keyboardType="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />

            <FormFieldInput
              label="Senha"
              placeholder="Senha 8 a 10 caracteres"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />

            <FormButton
              isDisable={!isValid }
              onClick={handleSubmit}
              text="Cadastrar"
            />
          </S.FormStyled>
        )}
      </Formik>
    </S.Container>
  );
};

export default UserForm;
