<script lang="ts" setup>
import {ComponentsListType} from "@/types/index"
import {reactive} from "vue"

const cmpList: ComponentsListType[] = reactive([
  {
    groupName: 'Inputs',
    groupList: [
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
    ],
  },
  {
    groupName: 'Inputs',
    groupList: [
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
    ],
  },
  {
    groupName: 'Inputs',
    groupList: [
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
      {
        name: 'Search',
        url: '/'
      },
    ],
  },
])

</script>

<template>
  <aside class="flex flex-col">
    <h1>Custom components</h1>
    <ul class="flex flex-col cmp-list">
      <li v-for="(list, index) in cmpList" :key="`cmp_list_${index}`" class="flex flex-col">
        <h2>{{ list.groupName }}</h2>
        <ul class="flex flex-col">
          <li v-for="(item, id) in list.groupList" :key="`cmp_list_link_${id}`">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>


<style lang="scss" scoped>

aside {
  border-right: 1px solid var(--custom-green);
  height: 80vh;
  width: 25rem;
  max-width: 30%;
  padding: 1rem 1rem 1rem 2rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: .5rem;
  }

  a {
    font-size: 1.6rem;
    transition: color .2s;

    &:hover {
      color: var(--custom-green);
    }
  }

  ul {
    margin-bottom: 2rem;

    li {
      margin-bottom: 1rem;
    }
  }

  .cmp-list {
    overflow-y: auto;
  }
}

</style>