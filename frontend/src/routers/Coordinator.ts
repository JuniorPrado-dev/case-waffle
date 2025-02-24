import { NavigateFunction } from 'react-router-dom';

export const goToHome=(navigate:NavigateFunction)=>{
    navigate(`/`)
}
export const goToLogin=(navigate:NavigateFunction)=>{
    navigate(`/login`)
}
export const goToSingUp=(navigate:NavigateFunction)=>{
    navigate(`/sing-up`)
}
// export const goToProfessionRegister=(navigate:NavigateFunction)=>{
//     navigate(`/prof`)
// }
export const goToResetPassword=(navigate:NavigateFunction)=>{
    navigate(`/reset-password`)
}
export const goToDashBoard=(navigate:NavigateFunction)=>{
    navigate(`/dashboard`)
}
export const goToBack=(navigate:NavigateFunction)=>{
    navigate("-1")
}
