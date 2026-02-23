<script setup lang="ts">
</script>

<template>
  <footer itemscope itemtype="http://schema.org/WPFooter">
    <section id="footer" class="l-footer" js-footer>
      <div class="p-footer">
        <div class="c-inner">
          <div class="p-footer-link">
            <div class="c-flex c-flex--center">
              <nuxt-link v-if="false" to="/terms" class="u-fS--sm">利用規約</nuxt-link>
              <nuxt-link v-if="false" to="/privacy" class="u-fS--sm">プライバシーポリシー</nuxt-link>
              <a href="https://3rd-gene.com/" target="_blank" class="u-fS--sm">運営会社</a>
            </div>
          </div>
        </div>
      </div>
      <div class="p-copyright">
        <p class="u-fS--xs">Copyright &copy; AIVALUE All rights reserved.</p>
      </div>
    </section>
  </footer>
</template>

<style scoped>
  .l-footer {
    height: var(--footer-height);
    background-color: var(--color-black);
  }
  .p-footer-link > .c-flex > * {
    margin: 0 1em 1em;
  }
</style>
