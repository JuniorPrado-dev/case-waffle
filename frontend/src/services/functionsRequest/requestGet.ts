/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import {BASE_URL} from "@/constants/url"
async function requestGet(endPoint:string, token?:string) {
    // URL para onde a requisição será enviada
    const url = `${BASE_URL}${endPoint}`;
   
   // Cabeçalhos opcionais da requisição
   let headers
    if (token){
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    }}else{
    headers = {
        'Content-Type': 'application/json',
    }}

    try {
        // Fazendo a requisição POST
        const response = await axios.get(url, { headers });
        return {status:"success",
                data: response.data
                }
        
    } catch (error:any) {
        // Tratamento de erros
        if (error.response) {
            // O servidor respondeu com um status diferente de 2xx
            if (error.response.data.detail){
                return error.response.data.detail
            }else {
                return "Desculpe! Ocorreu um erro!\nTente mais tarde!"
            }
            
        } else if (error.request) {
            // A requisição foi feita, mas não houve resposta
            console.log('Erro na requisição:', error.request);
            return "Desculpe! Ocorreu um erro!\nTente mais tarde!"
        } else {
            // Alguma outra coisa causou o erro
            console.log('Erro:', error.message);
            return "Desculpe! Ocorreu um erro!\nTente mais tarde!"
        }
    }
}
export default requestGet;