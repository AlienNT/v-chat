<script setup>
import PaperClip from "@/components/UI/icons/PaperClip.vue";
import {useFileReader} from "@/composables/useFileReader.ts";

const emit = defineEmits([
  'onInput'
])

const {fileToBase} = useFileReader()

function onClick() {
  const inputFile = document.createElement('input')
  inputFile.setAttribute('type', 'file')
  inputFile.setAttribute('multiple', 'true')
  inputFile.click()

  inputFile.oninput = async e => {
    const files = e.target.files

    if (!files.length) return
    const filesArray = []
    console.log('files', files)

    for (let i = 0; i < files.length; i++) {
      filesArray.push({
        name: files[i]?.name,
        size: files[i]?.size,
        file: await fileToBase(files[i])
      })
    }

    console.log('filesArray', filesArray)
    emit("onInput", filesArray)

  }
}
</script>

<template>
  <PaperClip
      @click="onClick"
  />
</template>

<style scoped lang="scss">

</style>