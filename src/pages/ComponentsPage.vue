<script setup lang="ts">
import {defineAsyncComponent} from "vue"
const ComponentsSidebar = defineAsyncComponent(() => import("@components/bars/ComponentsSidebar.vue"))
</script>

<template>
  <div class="page__content">
    <components-sidebar/>
    <main>

    </main>
  </div>
</template>

<style scoped lang="scss">

</style>