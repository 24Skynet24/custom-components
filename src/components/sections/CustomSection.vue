<script setup lang="ts">
import {defineProps} from "vue"

defineProps({
  sectionTitle: String,
})
</script>

<template>
  <section class="section">
    <h2 class="section__title">{{ sectionTitle }}</h2>
    <div class="section__content">
      <slot/>
    </div>
  </section>
</template>


<style scoped lang="scss">
.section__title {
    font-size: 2rem;
    margin-bottom: 3rem;
}
</style>