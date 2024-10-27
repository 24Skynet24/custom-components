<script setup lang="ts">
import {defineAsyncComponent} from "vue"
import {ComponentCardType} from "@/types/index.ts"

const HelloSection = defineAsyncComponent(() => import("@components/sections/HelloSection.vue"))
const CustomSection = defineAsyncComponent(() => import("@components/sections/CustomSection.vue"))
const ComponentCard = defineAsyncComponent(() => import("@components/cards/ComponentCard.vue"))

const cards: ComponentCardType[] = [
  {
    link: {
      url: '/',
      name: 'more',
    },
    title: 'Test',
    img: './src/images/test-gif.gif'
  }
]
</script>

<template>
  <main class="container">
    <hello-section/>
    <custom-section section-title="New components">
      <div class="grid grid-cols-3 gap-8">
        <component-card
            v-for="(card, id) in cards"
            :card-info="card"
            :key="`new_card_cmp_${id}`"
        />
      </div>
    </custom-section>
  </main>
</template>

<style lang="scss" scoped>

main {
  padding: 4rem 0;
}

</style>
