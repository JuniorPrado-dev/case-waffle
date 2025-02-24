/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik } from "formik";
import * as S from "./style";
import { FormButton, FormFieldInput } from "../FormField";
import { validationCategoryForm } from "@/utils/validationSchemas";
import Alert from "../Alert";
import { useAppDispatch} from "@/redux/hooks";
import { addCategory } from "@/services/categories";

interface CatProps{
  setIndex:(v:number) => void;
}
const CategoryForm: React.FC<CatProps> = ({setIndex}) => {
  const initialValues = {
    name: "",
  };
  //hooks
  const dispatch = useAppDispatch();
  const [isVisibleOnSubmit, setIsVisibleOnSubmit] = useState(false);
  const [dataModal, setDataModal] = useState({
    status: "",
    detail: "",
  });
  
  const handleSubmit = async (values:any) => {
    const newCategory: TypeCategoryRequest = {
      name: values.name
    };

    const response = await addCategory(dispatch, newCategory);
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
        onClose={()=>setIndex(0)}
        buttons={[
          {
            label: "Ok",
            onClick:
              dataModal.status !== "error"
                ? () => {
                    setIsVisibleOnSubmit(false);
                    setIndex(0)
                  }
                : () => {
                    setIsVisibleOnSubmit(false);
                  },
          },
        ]}
      />
      <S.Title>Nova Categoria</S.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationCategoryForm}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          touched,
        }) => (
          <S.FormStyled>
            <S.SectionContainer>
              <FormFieldInput
                  label="Nome"
                  placeholder="Nome da categoria..."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
              />
            </S.SectionContainer>
            <FormButton
              text="Cadastrar Categoria"
              onClick={() => handleSubmit()}
              isDisable={!isValid}
            />
          </S.FormStyled>
        )}
      </Formik>
    </S.Container>
  );
};

export default CategoryForm;
