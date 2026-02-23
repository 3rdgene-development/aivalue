<template>
  <div class="l-body">
    <section class="l-loader" id="loader" js-loader>
      <div class="p-loader">
        <div class="c-loader-ripples"></div>
      </div>
    </section>
    <Header />
    <main class="l-main" js-main>
      <slot></slot>
    </main>
    <Footer />
    <Toast />
  </div>
</template>

<script setup lang="ts">
  const { $onResize, $onScroll } = useNuxtApp()
  onMounted( () => {
    window.addEventListener('resize', $onResize)
    window.addEventListener('scroll', $onScroll)
  })
</script>

<style scoped>
</style>
