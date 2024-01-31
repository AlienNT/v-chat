import {computed, reactive} from "vue";

import {Color, ColorsState} from "../interfaces/colors";

const state: ColorsState = reactive({
    colors: [
        {
            name: 'Colors-Dominant-BG-HContrast',
            value: '#182330'
        },
        {
            name: 'Colors-Dominant-BG-Medium-Contrast',
            value: '#212F3F'
        },
        {
            name: 'Colors-Accent-Blue-Primary',
            value: '#368CCC'
        },
        {
            name: 'Colors-Accent-Blue-Secondary',
            value: '#61AAE1'
        },
        {
            name: 'Colors-Accent-Green',
            value: '#35C47C'
        },
        {
            name: 'Colors-Accent-Red',
            value: '#FC4C53'
        },
        {
            name: 'Colors-Content-Hight-Contrast',
            value: '#EAF4FA'
        },
        {
            name: 'Colors-Content-Medium-Contrast',
            value: '#6C808C'
        },
        {
            name: 'Colors-Dominant-BG-Low-Contrast',
            value: '#314356'
        }
    ]
})

export function useColors(): object {
    const colors = computed((): Color[] => {
        return state.colors
    })

    return {
        colors
    }
}