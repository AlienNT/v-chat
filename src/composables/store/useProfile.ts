import {computed, reactive} from "vue";

import {Id} from "../../interfaces";
import {Profile, ProfileState} from "../../interfaces/profile";

const state: ProfileState = reactive({
    profile: null
})

export function useProfile() {
    const profile = computed((): Profile => {
        return state.profile
    })

    function setProfile({profile}: ProfileState): void {
        state.profile = profile
    }

    function resetProfile(): void {
        state.profile = null
    }

    const userId = computed((): Id => {
        return state.profile?._id
    })
    return {
        profile,
        setProfile,
        resetProfile,
        userId
    }
}