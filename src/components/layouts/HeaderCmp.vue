<script lang="ts" setup>
import LogoLink from "@/ui/links/LogoLink.vue"
import {LinkRouteType} from "@/types/index.ts"

const navRoutes: Array<LinkRouteType> = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/components',
    name: 'Components'
  }
]
</script>

<template>
  <header class="header" role="banner">
    <div class="container flex items-center justify-between">
      <logo-link/>

      <nav role="navigation">
        <ul class="flex items-center gap-8" role="list">
          <li v-for="link in navRoutes" :key="`header_link_${link.name}`">
            <router-link :to="link.url" role="link">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Refactor search -->
      <input type="search" placeholder="Search" class="test-search" role="searchbox">
    </div>
  </header>
</template>

<style scoped lang="scss">

header {
  padding: 1rem 0;

  nav {
    a {
      font-size: 1.8rem;
    }
  }

  .test-search {
    width: 20rem;
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid var(--black);
    border-radius: 8px;
  }
}

</style>