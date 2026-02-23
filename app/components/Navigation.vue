<script setup lang="ts">
  const isSideMenu = useState('isSideMenu', () => true)
  const toggleSideMenu = () => {
    isSideMenu.value = !isSideMenu.value
  }

  const serviceFavoriteStore = useServiceFavorite()
</script>

<template>
  <aside id="sideMenu" :class="{ 'is-true': isSideMenu }">
    <div class="p-container">
      <div class="p-content">
        <div class="p-content-list">
          <div>
            <nuxt-link to="/dashboard/" class="p-content-list-title c-flex">
              <span class="material-symbols-outlined">home</span>
              <span class="u-fS--sm u-fW--700">ホーム</span>
            </nuxt-link>
          </div>
          <div>
            <a href="#" class="p-content-list-title c-flex">
              <span class="material-symbols-outlined">bookmark_star</span>
              <span class="u-fS--sm u-fW--700">お気に入り</span>
            </a>
            <div class="p-content-list-2nd">
              <template v-for="item in serviceFavoriteStore.serviceFavoriteResponse.data.favoriteList">
                <nuxt-link :to="`/dashboard/mail/` + item.serviceId">{{ item.serviceName }}</nuxt-link>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="p-footer">
        <div class="p-footer-list">
          <div>
            <a href="#" class="p-footer-list-title c-flex">
              <span class="material-symbols-outlined">settings</span>
              <span class="u-fS--sm u-fW--700">設定</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div @click="toggleSideMenu()" class="p-toggle">
      <span class="material-symbols-outlined">keyboard_arrow_left</span>
      <span class="material-symbols-outlined">keyboard_arrow_right</span>
    </div>
  </aside>
</template>

<style scoped>
#sideMenu {
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: calc(var(--base) * 6);
  height: calc(100dvh - var(--header-height));
  background-color: var(--color-surface-container-lowest);
  border-right: 1px solid var(--color-surface-container);
  z-index: 99;
  transition: width .1s ease-out;
}
#sideMenu.is-true {
  width: calc(var(--base) * 30);
}
.p-container {
  height: inherit;
}
.p-content {
  padding: calc(var(--base) * 1.5) 0 calc(var(--base) * 6);
  overflow: hidden;
}
.p-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.p-content-list-title,
.p-footer-list-title {
  width: calc(var(--base) * 30);
  height: calc(var(--base) * 6);
  color: var(--color-2nd-container-on);
  padding: 0 calc(var(--base) * 1.2);
  gap: calc(var(--base) * 1.2);
  align-content: center;
  align-items: center;
}
.p-content-list-title > span:nth-of-type(1),
.p-footer-list-title > span:nth-of-type(1) {
  font-size: calc(var(--base) * 3.5);
}
a.p-content-list-title:hover,
a.p-footer-list-title:hover {
  background-color: var(--color-surface-container-low);
}
.p-content-list-2nd {
  padding-left: calc(var(--base) * 6);
}
.p-content-list-2nd a {
  display: block;
  width: calc(var(--base) * 24);
  font-size: var(--font-size-sm);
  color: var(--color-2nd-container-on);
  padding: calc(var(--base) * .5) calc(var(--base) * .75);
  padding-left: 0;
}
.p-toggle {
  position: absolute;
  right: calc(var(--base) * -3.5);
  top: 0;
  cursor: pointer;
}
.p-toggle > span {
  font-size: calc(var(--base) * 3.5);
  padding: calc(var(--base) * 1) 0;
  background-color: var(--color-surface-container-lowest);
  border: 1px solid var(--color-surface-container);
  border-left: none;
}
#sideMenu.is-true .p-toggle > span:nth-of-type(1) {
  display: block;
}
#sideMenu.is-true .p-toggle > span:nth-of-type(2) {
  display: none;
}
.p-toggle > span:nth-of-type(1) {
  display: none;
}
.p-toggle > span:nth-of-type(2) {
  display: block;
}
@media screen and (max-width: 960px) {
}
@media screen and (max-width: 640px) {
}
</style>
