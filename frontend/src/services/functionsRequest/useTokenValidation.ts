// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';
// import { useDispatch} from 'react-redux';
// import useRequestGet from './useRequestGet';
// import { login } from '@/globalState/clientSlice';
// import { tokenCache } from '@/storage/tokenCach';

// export default function useValidationToken() {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         const fetchToken = async () => {
//             try {
//                 // const token = await AsyncStorage.getItem('token');
//                 const token = await tokenCache.getToken("token");
//                 //console.log({token});
                
//                 if (token !== null) {
//                     const dataUser = await useRequestGet("/client/authorization",token)
//                     if (dataUser && dataUser.status==="success")
//                         dispatch(login(dataUser.data))
//                 }
//             } catch (error:any) {
//                 console.log("erro",error.response.data.detail);
//             }
//         };

//         fetchToken();
//     }, []);
// };
