<template>
  <RplHeroHeader
    :behind-nav="true"
    :breadcrumbs="hasBreadcrumbs"
    :title="header?.title"
  >
    {{ header?.summary }}
  </RplHeroHeader>
</template>

<script setup lang="ts">
import type { TideExampleContentTypeHeader } from '../types'

interface Props {
  header: TideExampleContentTypeHeader
  hasBreadcrumbs: boolean
}

defineProps<Props>()
</script>
