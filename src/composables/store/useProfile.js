import {computed, reactive} from "vue";

const state = reactive({
    profile: {}
})

export function useProfile() {
    const profile = computed(() => {
        return state.profile
    })

    function setProfile(data) {
        console.log('set profile', data)
        state.profile = data
    }

    function resetProfile() {
        state.profile = {}
    }

    const userId = computed(() => {
        return state.profile?._id
    })
    return {
        profile,
        setProfile,
        resetProfile,
        userId
    }
}