import {computed, reactive} from "vue";
import {toBase64} from "../helpers";

import {FileBlob, FileReaderState} from "../interfaces/fileReader";

export function useFileReader(): object {
    const state: FileReaderState = reactive({
        files: []
    })

    const files = computed(() => {
        return state.files
    })

    function addFiles(files: FileBlob[]): void {
        state.files = [...state.files, ...files]
    }

    function resetFiles(): File[] {
        return state.files = []
    }

    function fileToBase(file: File): Promise<string | ArrayBuffer | FileBlob> {
        return toBase64(file)
    }

    return {
        files,
        addFiles,
        resetFiles,
        fileToBase,
    }

}