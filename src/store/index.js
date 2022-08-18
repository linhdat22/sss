import {createStore} from 'vuex'
import axios from "axios";
let userinf = localStorage.getItem('user-inf');
userinf = JSON.parse(userinf)
const store = createStore({
    state(){
        return {
            user: userinf,
            isAuth:false,
            listCamps:[]
        }
    },
    mutations:{
        setLogined(state){
            state.isAuth = true;
        },
        updateUserData(state,newUser){
            state.user = newUser;
        },
        setListDataCamps(state,payload){
           /* console.log("payload: ",payload)*/
            state.listCamps = payload;
        }

    },
    actions:{
        async loginAction({commit}){
            commit("setLogined")
       },
        async getListCamps(context){

            const url = "https://accestradeapi3.somee.com/api/Camps/GetALL";
            const token = context.getters.getTokenUser
           /* console.log(token)*/
            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token
                }
            }).then((res)=>{
                context.commit('setListDataCamps',res.data)
                context.commit('setLogined')
            })
        }
    },
    getters:{
        getUserInf(state){
            return state.user
        },
        getTokenUser(state){
            return state.user.token
        },
        getUserRole(state){
            return state.user.isAdmin
        },
        getStatusLogin(state){
            return state.isAuth
        },
        getListCamps(state){
            return state.listCamps
        }
    }
})


export default store;