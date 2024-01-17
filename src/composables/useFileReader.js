import {computed, reactive} from "vue";
import {toBase64} from "@/helpers/index.js";

export function useFileReader() {
    const state = reactive({
        files: []
    })

    const files = computed(() => {
        return state.files
    })

    function addFiles(files) {
        return state.files = [...state.files, ...files]
    }

    function resetFiles() {
        return state.files = []
    }

    function fileToBase(file) {
        return toBase64(file)
    }

    return {
        files,
        addFiles,
        resetFiles,
        fileToBase,
    }

}