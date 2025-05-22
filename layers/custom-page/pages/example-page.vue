<template>
  <TideBaseLayout :page="{}" :site="site" page-title="Example page">
    <template #aboveHeader>
      <slot name="aboveHeader" />
    </template>
    <template #primaryNav>
      <slot name="primaryNav" />
    </template>
    <template #breadcrumbs>
      <slot name="breadcrumbs" />
    </template>
    <template #body>
      {{ exampleData }}
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
const exampleData = 'Test 123'
const site = {
  "name": "Test site",
  "socialImages": {},
  "menus": {}
}

</script>
