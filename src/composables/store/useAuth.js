import {computed, reactive} from "vue";

const state = reactive({
    token: '',
    isAuth: false,
})

export function useAuth() {
    const token = computed(() =>
        state.token
    )

    function setToken(token) {
        console.group('setToken')
        console.warn('token', token)
        console.groupEnd()

        localStorage.setItem('token', token)
        return state.token = token
    }

    const isAuth = computed(() =>
        !!state.token
    )

    function setIsAuth(value) {
        return state.isAuth = value
    }


    return {
        token,
        setToken,

        isAuth,
        setIsAuth,

    }
}