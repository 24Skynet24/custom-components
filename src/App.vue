<script setup lang="ts">
import HeaderCmp from "@components/layouts/HeaderCmp.vue"
import FooterCmp from "@components/layouts/FooterCmp.vue"
</script>

<template>
  <div>
    <header-cmp/>
    <div id="pages">
      <router-view/>
    </div>
    <footer-cmp/>
  </div>
</template>

<style scoped lang="scss">
#pages {
  min-height: 80vh;
}
</style>