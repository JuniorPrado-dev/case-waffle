/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { getCookie, setCookie } from "../cookies";
import { updateUser } from "../users";
import requestPost from "../functionsRequest/requestPost";
import requestDelete from "../functionsRequest/requestDelete";
import requestGet from "../functionsRequest/requestGet";
import { cleanProfessional, setProfessional } from "@/redux/professionalSlice";
import { updateCategoryList } from "../categories";
import requestPut from "../functionsRequest/requestPut";

export const updateProfessional = (dispatch: Dispatch) => {
    const token = getCookie("token")
    const update = async () => {
        try {
            const response = await requestGet(`/professional/get`, token)
            if (response.status && response.status === "success") {
                dispatch(setProfessional(response.data))
            } else {
                console.log("Error_Update_Professional: ", response)
            }
        } catch (error) {
            console.log("Error_Resister: ", error)
        }
    }
    return update();
};
export const clearProfessional = (dispatch: Dispatch) => {
    const clear = async () => {
        try {
            dispatch(cleanProfessional())
        } catch (error) {
            console.log("Error_ClearProfessional: ", error)
        }
    }
    return clear();
};
export const addProfession = (data: TypeProfessionRequest, dispatch: Dispatch) => {
    const token = getCookie("token")
    const addProfession = async () => {
        try {
            const response = await requestPost(`/professional/add-category`, data, token)
            if (response.status && response.status === "success") {
                setCookie({ key: "token", value: response.data.token })
                updateUser(dispatch)
                return {
                    status: "Dados atualizados!",
                    detail: "Nova Profissão cadastrada com sucesso!"
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
    return addProfession();
};
export const removeProfession = (categories: string, dispatch: Dispatch) => {
    const token = getCookie("token")
    const removeProfession = async () => {
        try {
            const response = await requestDelete(`/professional/delete-category?categories=${categories}`, token)
            if (response.status && response.status === "success") {
                setCookie({ key: "token", value: response.data.token })
                updateUser(dispatch)
                return {
                    status: "Dados atualizados!",
                    detail: "Profissão removida com sucesso!"
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
    return removeProfession();
};


export const loadProfessionalByUserId = (dispatch: Dispatch) => {
    const token = getCookie("token");
    const getProfessionalByUserId = async () => {
        try {
            const response = await requestGet(`/professional/get`, token);
            if (response.status && response.status === "success") {
                dispatch(setProfessional(response.data));
            } else {
                console.log("Error_GetProfessionalByUserId: ", response);
            }
        } catch (error) {
            console.log("Error_GetProfessionalByUserId: ", error);
        }
    };
    return getProfessionalByUserId();
};

export const professionalCandidateToOrder = (dispatch: Dispatch, orderId: string, professionalId: string, orderCoinsQuantity: number) => {
    const token = getCookie("token")
    const request = async () => {
        try {
            const response = await requestPut(`/order/professional-candidate?order_id=${orderId}&professional_id=${professionalId}&coins_quantity=${orderCoinsQuantity}`, {}, token)
            if (response.status && response.status === "success") {
                updateCategoryList(dispatch)
                return {
                    status: "Serviço selecionado!",
                    detail: "Agora você é um candidato à vaga! Aguarde o contato do contratante!"
                }
            } else {
                console.log("Error_ToCandidate", response)
                return {
                    status: "error",
                    detail: response
                }
            }
        } catch (error) {
            console.log("Error_ToCandidate", error)
            return {
                status: "error",
                detail: "Falha!\nTente Novamente mais tarde!"
            }
        }
    }
    return request();
};