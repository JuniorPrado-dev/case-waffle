/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import requestPost from "../functionsRequest/requestPost";
import { getCookie,  setCookie } from "../cookies";
import { logoutUser} from "@/redux/userSlice";
import { googleLogout } from "@react-oauth/google";
import requestGet from "../functionsRequest/requestGet";
import { setUserList } from "@/redux/userListSlice";

export const userRegistration = (dataRegistration: TypeUserRequest) => {
    const register = async () => {
        try {
            const response = await requestPost("/users/register", dataRegistration)
            if (response.status && response.status === "success") {
                setCookie({ key: "token", value: response.data.token })
                return {
                    status: "Cadastro realizado com sucesso!",
                    detail: "Agora você é mais um de nossos detetives !"
                }
            } else {
                console.log("Error_Resister", response)
                return {
                    status: "error",
                    detail: response
                }
            }
        } catch (error) {
            console.log("Error_Resister", error)
            return {
                status: "error",
                detail: "Falha Ao Cadastrar!\nTente Novamente mais tarde!"
            }
        }
    }
    return register();
};

export const userLogin = (dataLogin: TypeUserLogin) => {
    const makeLogin = async () => {
        try {
            const response = await requestPost("/users/login", dataLogin)
            if (response.status && response.status === "success") {
                setCookie({ key: "token", value: response.data.token })
                return {
                    status: "Login realizado com sucesso!",
                    detail: "Vamos ao trabalho!"
                }
            } else {
                console.log("Error_Login", response)
                return {
                    status: "error",
                    detail: response
                }
            }
        } catch (error) {
            console.log("Error_Login", error)
            return {
                status: "error",
                detail: "Falha no login!\nTente Novamente mais tarde!"
            }
        }
    }
    return makeLogin();
}

export const userLogout = (dispatch: Dispatch) => {
    const makeLogout = async () => {
        try {
            dispatch(logoutUser());
            googleLogout();
        } catch (err: any) {
            console.log("ERROR_Logout: ", err)
        }
    };
    makeLogout();
};

export const getUserList = (dispatch:Dispatch) => {
    const token = getCookie("token")
    const update = async () => {
        try {
            const response = await requestGet(`/users`, token)
            if (response.status && response.status === "success") {
                dispatch(setUserList(response.data))
            } else {
                console.log("Error_AllUser", response)
            }
            return null;
        } catch (error) {
            console.log("Error_ALL_USER", error)
            return null
        }
    }
    return update();
};
