import * as S from "./style";
import { Formik } from "formik";
import { validationLoginForm } from "@/utils/validationSchemas";
import { FormButton, FormFieldInput } from "../FormField";
import { useState } from "react";
import { userLogin } from "@/services/users";
import Alert from "../Alert";
import { goToDashBoard, goToSingUp, goToResetPassword } from "@/routers/Coordinator";
import { useNavigate } from "react-router-dom";
//import GoogleLoginButton from "./GoogleLoginButton";

function LoginForm() {
  const initialValues: TypeUserLoginRequest = {
    google_id: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [isVisibleOnSubmit, setIsVisibleOnSubmit] = useState(false);
  const [dataModal, setDataModal] = useState({
    status: "",
    detail: "",
  });

  const handleSubmit = async (values: TypeUserLoginRequest) => {
    const response = await userLogin(values);
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
        title={dataModal.status!= "error" ? dataModal.status: "Erro ao Fazer Login! ⚠️"}
        content={dataModal.detail}
      
        buttons={[
          {
            label: "Ok",
            onClick:
              dataModal.status !== "error"
                ? () => {
                    goToDashBoard(navigate);
                    setIsVisibleOnSubmit(false);
                  }
                : () => {
                    setIsVisibleOnSubmit(false);
                  },
          },
        ]}
      />
      <S.Title>Login</S.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationLoginForm}
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
              label="Email"
              placeholder="Email cadastrado..."
              keyboardType="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />

            <FormFieldInput
              label="Senha"
              placeholder="Senha cadastrada..."
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <FormButton
              isDisable={!isValid}
              onClick={() => handleSubmit()}
              text="Entrar"
            />
            <FormButton
              onClick={() => goToSingUp(navigate)}
              text="Cadastar"
            />
            <FormButton 
              onClick={() => goToResetPassword(navigate)}
              text="Esqueci a senha"
            />
            {/* <GoogleLoginButton
              setIsVisibleOnSubmit={setIsVisibleOnSubmit}
              setDataModal={setDataModal}
            /> */}

          </S.FormStyled>
        )}
      </Formik>
    </S.Container>
  );
}

export default LoginForm;
