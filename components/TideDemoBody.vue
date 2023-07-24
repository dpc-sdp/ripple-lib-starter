<template>
  <RplPageComponent class="tide-demo">
    <RplContent :html="bodyContent" />
  </RplPageComponent>
</template>

<script setup lang="ts">
interface Props {
  bodyContent: string
}

defineProps<Props>()
</script>
