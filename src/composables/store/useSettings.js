import {computed, reactive} from "vue";

const state = reactive({
    settings: {}
})

export function useSettings() {
    const settings = computed(() => {
        return state.settings
    })

    function setSettings(data) {
        state.settings = data
    }

    function resetSettings() {
        state.settings = {}
    }

    return {
        settings,
        setSettings,
        resetSettings
    }
}