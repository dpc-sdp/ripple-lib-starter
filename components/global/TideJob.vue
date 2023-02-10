<template>
  <TideBaseLayout :site="site" :background="page.background" :pageTitle="page.title" :pageDescription="page.description"
    :pageLanguage="page.lang" :updatedDate="page.changed || page.created">
    <template #aboveBody="{ hasBreadcrumbs }">
      <TideJobHeader :title="page.title" :summary="page.boardName" :hasBreadcrumbs="hasBreadcrumbs"></TideJobHeader>
    </template>
    <template #body>
      <h3 class="rpl-type-h3 rpl-u-margin-b-4 rpl-u-margin-t-4">Overview</h3>
      <RplList :items="overviewList" item-class="tide-job-list-item rpl-type-h4-fixed" />
      <section v-for="section in page.sections">
        <h3 class="rpl-type-h3 rpl-u-margin-b-4 rpl-u-margin-t-4">{{ section.title }}</h3>
        <RplContent :html="section.content"></RplContent>
      </section>
    </template>
    <template #sidebar>
      <slot name="sidebar"></slot>
    </template>
  </TideBaseLayout>
</template>

<script setup lang="ts">
import { TideSiteData } from '@dpc-sdp/ripple-tide-api/types'
import type { TideJobPage } from '../../types'

interface Props {
  site: TideSiteData
  page: TideJobPage
}

const props = defineProps<Props>()


const overviewList = computed(() => {
  if (props.page) {
    return [
      ['employmentType', 'icon-user-circle-filled'],
      ['meetingFrequency', 'icon-star'],
      ['meetingLength', 'icon-question-circle-lined'],
      ['location', 'icon-pin'],
      ['industryName', 'icon-dollar-circle-filled']].map(key => {
        if (props.page.hasOwnProperty(key[0])) {
          return {
            text: props.page[key[0]],
            icon: key[1]
          }
        }
      }).filter(i => i)
  }
})
</script>

<style>
.tide-job-list-item {
  display: flex;
  gap: var(--rpl-sp-3);
  align-items: center;
  margin-bottom: var(--rpl-sp-2);
}
</style>
