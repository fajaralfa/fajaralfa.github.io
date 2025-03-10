<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const isClickedCopy = ref(false)
const codeRef = useTemplateRef('code')

function copyToClipboard() {
  isClickedCopy.value = true
  navigator.clipboard.writeText(codeRef.value?.textContent ?? '')
  setTimeout(() => isClickedCopy.value = false, 1000)
}

</script>
<template>
  <div class="my-1">
    <div class="text-sm px-2 border border-b-0 dark:border-gray-600 flex justify-between">
      <div class="space-x-2">
        <Icon v-if="devIcon($props.language)" :name="devIcon($props.language)" class="icon-language" />
        <span v-else>{{ $props.language }}</span>
        <span>{{ $props.filename }}</span>
      </div>
      <div>
        <button class="copy-to-clipboard" @click="copyToClipboard()">
          <Icon :name="isClickedCopy ? 'ri:file-copy-fill' : 'ri:file-copy-line'" class="icon-copy" />
        </button>
      </div>
    </div>
    <pre :class="$props.class" class="m-0 rounded-none" ref="code"><slot /></pre>
  </div>
</template>
