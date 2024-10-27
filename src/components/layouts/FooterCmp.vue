<script setup lang="ts">
import LogoLink from "@/ui/links/LogoLink.vue"
</script>

<template>
  <footer>
    <div class="container flex items-center justify-between">

      <div class="footer-content flex flex-col gap-4">
        <h6>Contacts</h6>
        <div class="inline-flex gap-8">
          <a href="https://t.me/aldev20" target="_blank" title="Telegram">
            <img src="@/images/icons/telegram.svg" alt="">
          </a>
          <a href="https://github.com/24Skynet24" target="_blank" title="GitHub">
            <img src="@/images/icons/github.svg" alt="">
          </a>
          <a href="https://www.linkedin.com/in/mac24/" target="_blank" title="LinkedIn">
            <img src="@/images/icons/linkedin.svg" alt="">
          </a>
        </div>
      </div>

      <span>© 2024 Al24</span>

      <logo-link/>

    </div>
  </footer>
</template>

<style scoped lang="scss">

footer {
  padding: 1rem 0;
  background: var(--black);
  color: var(--white);

  h6, span {
    font-size: 1.8rem;
  }
}

</style>