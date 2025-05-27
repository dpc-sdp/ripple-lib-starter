<template>
  <TideBaseLayout
    :site="site"
    :page="page"
    :site-section="page.siteSection"
    :page-title="page.title"
    :page-language="page.lang"
    :updated-date="page.changed || page.created"
    :show-content-rating="page.showContentRating"
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
      <TideExampleContentTypeHeader
        :header="page.header"
        :has-breadcrumbs="hasBreadcrumbs"
      />
    </template>
    <template #body="{ hasSidebar }">
      <h3 class="rpl-type-h3">Example field</h3>
      <RplButton>{{ page.exampleField }}</RplButton>
      <h3 class="rpl-type-h3">
        These components below share the Landing page component functionality
      </h3>
      <TideDynamicComponents
        v-if="page.bodyComponents?.length > 0"
        :components="page.bodyComponents"
        :has-sidebar="hasSidebar"
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
import type { TideSiteData } from '@dpc-sdp/ripple-tide-api/types'
import type { TideExampleContentTypePage } from '../../types'

interface Props {
  site: TideSiteData
  page: TideExampleContentTypePage
}

defineProps<Props>()
</script>
