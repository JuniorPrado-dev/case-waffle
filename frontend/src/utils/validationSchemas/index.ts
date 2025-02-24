import * as Yup from 'yup';

export const validationUserForm = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(10, "A senha deve ter no máximo 10 caracteres"),
});

export const validationLoginForm = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
  .required("Senha é obrigatória"),
});
