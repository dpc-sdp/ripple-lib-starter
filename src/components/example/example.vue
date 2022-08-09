<script setup lang="ts">
import { RplButton } from '@dpc-sdp/ripple-ui-core'
import { ref } from 'vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <RplButton @click="count++">{{ msg }} : {{ count }}</RplButton>
</template>
