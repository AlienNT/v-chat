import {computed, reactive} from "vue";

const state = reactive({
    token:'',
    isAuth: true,
})
export function useAuth() {
    const token = computed(() =>
        state.token
    )

    function setToken(token) {
        return state.token = token
    }

    const isAuth = computed(() =>
        state.isAuth
    )

    function setIsAuth(value) {
        return state.isAuth = value
    }

    return {
        token,
        setToken,

        isAuth,
        setIsAuth
    }
}