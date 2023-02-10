<template>
  <RplHeaderHeroHeader :corner-top="true" :corner-bottom="false" :behind-nav="true" :breadcrumbs="hasBreadcrumbs"
    :title="title" :fullWidth="true">
    <p class="rpl-type-p-large rpl-u-margin-b-4 rpl-u-margin-t-4">{{ summary }}</p>
    <TideJobSlider class="rpl-u-margin-t-8"></TideJobSlider>
  </RplHeaderHeroHeader>
</template>

<script setup lang="ts">

interface Props {
  title: string
  summary: string
  hasBreadcrumbs: boolean
}

defineProps<Props>()
</script>

<style>
.tide-job-header__bottom {
  display: flex;
}
</style>
