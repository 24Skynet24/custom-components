<script setup lang="ts">
import HeaderCmp from "@components/layouts/HeaderCmp.vue"
import FooterCmp from "@components/layouts/FooterCmp.vue"
</script>

<template>
  <div>
    <header-cmp/>
    <router-view/>
    <footer-cmp/>
  </div>
</template>
