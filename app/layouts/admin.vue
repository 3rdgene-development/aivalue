<template>
  <div id="admin" class="l-body">
    <section class="l-loader" id="loader" js-loader>
      <div class="p-loader">
        <div class="c-loader-ripples"></div>
      </div>
    </section>
    <Header />
    <Navigation />
    <main class="l-main" js-main :data-sidemenu="isSideMenu ? 'active' : ''">
      <slot></slot>
    </main>
    <Toast />
  </div>
</template>

<script setup lang="ts">
  const { $onResize, $onScroll } = useNuxtApp()
  const isSideMenu = useState('isSideMenu')

  onMounted(async () => {
    window.addEventListener('resize', $onResize)
    window.addEventListener('scroll', $onScroll)

    const serviceFavoriteStore = useServiceFavorite()
    await serviceFavoriteStore.fetchServiceFavorite()
  })
</script>

<style scoped>
#admin .l-main {
  padding-left: calc(var(--base) * 6);
}
#admin .l-main[data-sidemenu="active"] {
  padding-left: calc(var(--base) * 30);
}
</style>
