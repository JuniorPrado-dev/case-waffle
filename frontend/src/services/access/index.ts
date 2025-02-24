/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { getCookie, removeCookie, setCookie } from "../cookies";
import requestGet from "../functionsRequest/requestGet";
import { setAccessList } from "@/redux/accessListSlice ";

export const getAccessList = (dispatch:Dispatch) => {
    const token = getCookie("token")
    const update = async () => {
        try {
            const response = await requestGet(`/game/access`, token)
            if (response.status && response.status === "success") {
                dispatch(setAccessList(response.data))
            } else {
                console.log("Error_AllAccess", response)
            }
            return null;
        } catch (error) {
            console.log("Error_ALL_Access", error)
            return null
        }
    }
    return update();
};
