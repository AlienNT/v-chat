import {computed, reactive} from "vue";

import {Settings, SettingsState} from "@/interfaces/settings";

const state: SettingsState = reactive({
    settings: null
})

export function useSettings(): object {
    const settings = computed((): Settings | null => {
        return state.settings
    })

    function setSettings(data: Settings): void {
        state.settings = data
    }

    function resetSettings() {
        state.settings = null
    }

    return {
        settings,
        setSettings,
        resetSettings
    }
}