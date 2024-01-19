import {computed, reactive} from "vue";

const state = reactive({
    profile: {}
})

export function useProfile() {
    const profile = computed(() => {
        return state.profile
    })

    function setProfile({profile}) {
        console.log('set profile', profile)
        state.profile = profile
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