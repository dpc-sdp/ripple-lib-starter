<template>
  <RplPageComponent class="tide-example-content-type">
    <RplContent :html="bodyContent" />
  </RplPageComponent>
</template>

<script setup lang="ts">
interface Props {
  bodyContent: string
}

defineProps<Props>()
</script>
