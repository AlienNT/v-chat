import {computed, reactive} from "vue";

const state = reactive({
    token: '',
    isAuth: false,
})

export function useAuth() {
    const token = computed(() =>
        state.token
    )

    function setToken({token}) {
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


    function resetToken() {
        localStorage.removeItem('token')
        state.token = ''
    }

    return {
        token,
        setToken,
        resetToken,

        isAuth,
        setIsAuth,

    }
}