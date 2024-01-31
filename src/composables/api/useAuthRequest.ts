import {apiRequest} from "../../helpers/request";
import {wsEvents} from "../../api/wsEvents";

export function useAuthRequest() {
    async function login(formData: string): Promise<void> {
        apiRequest({
            type: wsEvents.LOGIN,
            body: formData,
        })
    }

    async function registration(formData: string): Promise<void> {
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