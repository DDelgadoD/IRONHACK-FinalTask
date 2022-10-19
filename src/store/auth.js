// crear un store que tenga la vatiable
// isAuth -> para indicar si el usuario esta identificado
// user -> Objeto con la informacion del usuario

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false,
        user: {
            id: '',
        }
    }),

    actions: {
       login(id){
        this.isAuth = true;
        this.user.id = id;
       },

       logout(){
        this.isAuth = false;
        this.user.id = '';
       }
    }
})