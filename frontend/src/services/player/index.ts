/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { getCookie } from "../cookies";
import requestGet from "../functionsRequest/requestGet";
import { setPlayerList } from "@/redux/playerListSlice";
import { setPlayer } from "@/redux/playerSlice";

export const gePlayerList = (dispatch:Dispatch) => {
    const token = getCookie("token")
    const update = async () => {
        try {
            const response = await requestGet(`/game/player`, token)
            if (response.status && response.status === "success") {
                dispatch(setPlayerList(response.data))
            } else {
                console.log("Error_AllPlayer", response)
            }
            return null;
        } catch (error) {
            console.log("Error_ALL_Player", error)
            return null
        }
    }
    return update();
};
export const gePlayerByEmail = (dispatch:Dispatch, email:string) => {
    const token = getCookie("token")
    const update = async () => {
        try {
            const response = await requestGet(`/game/player/${email}`, token)
            if (response.status && response.status === "success") {
                dispatch(setPlayer(response.data))
            } else {
                console.log("Error_AllPlayer", response)
            }
            return null;
        } catch (error) {
            console.log("Error_ALL_Player", error)
            return null
        }
    }
    return update();
};
