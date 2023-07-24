<template>
  <RplHeroHeader
    :behind-nav="true"
    :breadcrumbs="hasBreadcrumbs"
    :title="header.title"
  >
    <p class="rpl-type-p-large rpl-u-margin-b-4 rpl-u-margin-t-4">
      {{ header.summary }}
    </p>
  </RplHeroHeader>
</template>

<script setup lang="ts">
import type { TideDemoHeader } from '../types'

interface Props {
  header: TideDemoHeader
  hasBreadcrumbs: boolean
}

defineProps<Props>()
</script>
