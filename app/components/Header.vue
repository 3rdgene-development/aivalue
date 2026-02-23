<script setup lang="ts">
</script>

<template>
  <header itemscope itemtype="http://schema.org/WPHeader">
    <section id="header" class="l-header" scroll-hidden="down" js-header>
      <div class="p-header">
        <div class="c-inner--full" header-level-1>
          <div class="p-header-logo">
            <nuxt-link to="/" class="c-hover--fade">
              <img src="~/assets/img/common/logo.svg" alt="AIバリュー - AIVALUE">
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <nav>
      <section id="drawer" class="l-drawer" drawer-type="right" js-drawer>
        <div class="p-drawer">
          <div class="p-drawer-link">
            <div class="c-flex">
            </div>
          </div>
        </div>
      </section>
    </nav>
  </header>

</template>

<style scoped>
/* header */
.l-header .p-header-logo {
  left: 24px;
}
.l-header .p-header-logo img {
  width: auto;
  height: 20px;
}
.l-header .p-header-menu {
  width: var(--header-height);
}
.l-header .p-header-menu-icon {
  height: 2px;
}
.l-header .p-header-menu-icon::before {
  width: 24px;
  height: 2px;
}
.l-header .p-header-menu-icon::after {
  width: 16px;
  height: 2px;
}
html.is-drawer .l-header .p-header-menu-icon::before {width: 32px;}
html.is-drawer .l-header .p-header-menu-icon::after {width: 32px;}
.p-header-button {
  position: absolute;
  right: 16px;
  top: 50%;
  translate: 0 -50%;
}
.p-header-button .c-btn--1st {font-size: 14px;}
.p-header-icon {
  position: absolute;
  right: var(--header-height);
  top: 0;
  width: var(--header-height);
  height: inherit;
  cursor: pointer;
}
.p-header-icon img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  translate: -50% -50%;
}
.p-header-icon span {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 12px;
  color: #ff0000;
  z-index: 1;
}
/* drawer */
.p-drawer-link > .c-flex > * {
  width: 100%;
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-align: left;
  padding: calc(var(--base) * 2.5) calc(var(--base) * 3);
  border-bottom: 1px solid var(--color-gray);
}
.p-drawer-link > .c-flex > *.is-logout {
  color: var(--color-surface-inverse-on);
  background-color: var(--color-surface-inverse);
}
@media screen and (max-width: 960px) {
  /* header */
  .l-header .p-header-logo {left: 16px;}
  .l-header .p-header-logo img {height: 18px;}
  .l-header .p-header-menu-icon {width: 28px;}
  .l-header .p-header-menu-icon::before {width: 20px;}
  .l-header .p-header-menu-icon::after {width: 12px;}
  html.is-drawer .l-header .p-header-menu-icon::before {width: 28px;}
  html.is-drawer .l-header .p-header-menu-icon::after {width: 28px;}
  .p-header-button .c-btn--1st {font-size: 13px;}
  .p-header-icon span {
    right: 14px;
    top: 14px;
    font-size: 10px;
  }
}
@media screen and (max-width: 640px) {
  /* header */
  .l-header .p-header-logo {left: 12px;}
  .l-header .p-header-logo img {height: 16px;}
  .l-header .p-header-menu-icon {width: 24px;}
  .l-header .p-header-menu-icon::before {width: 18px;}
  .l-header .p-header-menu-icon::after {width: 10px;}
  html.is-drawer .l-header .p-header-menu-icon::before {width: 24px;}
  html.is-drawer .l-header .p-header-menu-icon::after {width: 24px;}
  .p-header-button {right: 8px;}
  .p-header-button .c-btn--1st {font-size: 12px;}
  .p-header-icon img {
    width: 28px;
  }
  .p-header-icon span {
    right: 10px;
    top: 10px;
  }
}
</style>
