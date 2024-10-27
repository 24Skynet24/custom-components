<script lang="ts" setup>
import { Card } from "ant-design-vue"
import {ComponentCardType} from "@/types/index.ts"
import {defineProps} from "vue";

defineProps<{
  cardInfo: ComponentCardType,
}>()

</script>

<template>
  <Card :title="cardInfo.title">
    <template #extra>
      <router-link :to="cardInfo.link.url">
        {{ cardInfo.link.name }}
      </router-link>
    </template>
    <img :src="cardInfo.img" alt="">
  </Card>
</template>
