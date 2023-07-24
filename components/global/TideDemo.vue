<template>
  <TideBaseLayout
    :site="site"
    :page="page"
    :site-section="page?.siteSection"
    :page-title="page.title"
    :page-language="page.lang"
    :updated-date="page?.changed || page.created"
    :show-content-rating="page?.showContentRating"
  >
    <template #aboveHeader>
      <slot name="aboveHeader" />
    </template>
    <template #primaryNav>
      <slot name="primaryNav" />
    </template>
    <template #breadcrumbs>
      <slot name="breadcrumbs" />
    </template>
    <template #aboveBody="{ hasBreadcrumbs }">
      <TideDemoHeader :header="{ title: page.title}" :has-breadcrumbs="hasBreadcrumbs" />
    </template>
    <template #body>
      <h3 class="rpl-type-h3 rpl-u-margin-b-4 rpl-u-margin-t-4">
        Overview
      </h3>
      <TideDynamicComponents
        v-if="page.bodyComponents?.length > 0"
        :components="page.bodyComponents"
      />
    </template>
    <template #sidebar>
      <slot name="sidebar" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </TideBaseLayout>
</template>

<script setup lang="ts">
import { TideSiteData } from '@dpc-sdp/ripple-tide-api/types'
import type { TideDemoPage } from '../../types'

interface Props {
  site: TideSiteData
  page: TideDemoPage
}

defineProps<Props>()

</script>
