import {apiRequest} from "@/helpers/request.js";
import {wsEvents} from "@/api/wsEvents.js";

export function useAuthRequest() {
    async function login(formData) {
        console.log('login', formData)

        apiRequest({
            type: wsEvents.LOGIN,
            body: formData,
        })
    }

    async function registration(formData) {
        console.log('registration', formData)

        apiRequest({
            type: wsEvents.REGISTRATION,
            body: formData
        })
    }

    async function logout() {
        apiRequest({
            type: wsEvents.LOGOUT,
        })
    }

    return {
        login,
        registration,
        logout
    }
}