<script setup lang="ts">
  const { $onMounted } = useNuxtApp()

  /**
   * onMounted
   */
  onMounted(async () => {
    $onMounted()
  })

  /**
   * onUnmounted
   */
  onUnmounted(() => {
  })

  /**
   * Methods
   */

  /**
   * Modal
   */
  const modals = reactive({
    modalTable01: false,
  })
  const toggleModal = (modalName: keyof typeof modals) => {
    modals[modalName] = !modals[modalName]
  }
  const updateModal = (modalName: keyof typeof modals, value: boolean) => {
    modals[modalName] = value
  }

  /**
   * BASE
   */
  definePageMeta({
    layout: 'default'
  })
  useHead({
    title: 'AIバリュー | AI時代でも、選ばれ続けるメディアへ。',
    meta: [
      { name: 'description', content: 'AIバリュー | AI時代でも、選ばれ続けるメディアへ。' },
      { property: 'og:title', content: 'AIバリュー | AI時代でも、選ばれ続けるメディアへ。' },
      { property: 'og:description', content: 'AIバリュー | AI時代でも、選ばれ続けるメディアへ。' },
      { property: 'og:url', content: 'https://aival.jp' }
    ],
    link: [
    ],
    bodyAttrs: {
      id: 'home',
    }
  })
</script>

<template>
  <article>
    <!-- background -->
    <section id="background">
      <div class="p-background">
        <video
          src="~/assets/mov/home/mv-bg.mp4"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </div>
    </section>
    <!-- hero -->
    <section id="hero" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-content">
            <div class="p-content-headline">
              <p>NEXT-GEN AI EVALUATION</p>
              <h1>
                AI時代でも、<br>
                選ばれ続ける<br class="is-sp">メディアへ。
              </h1>
            </div>
            <div class="p-content-text u-mT4">
              <p>
                AIVALUEは、あなたの記事が<br class="is-tb-sp">AIにどう引用され、どの評価軸として<br class="is-sp">扱われているかを可視化します。<br>
                構造を整え、AIに正しく理解されるメディアへ。
              </p>
            </div>
            <div class="p-content-button u-mT4">
              <div class="c-flex">
                <nuxt-link v-if="false" to="/keyword" class="c-btn--black c-hover--fade">
                  <span>キーワード</span>
                </nuxt-link>
                <nuxt-link to="/contact" class="c-btn--white c-hover--fade">
                  <span>資料請求する</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- issue -->
    <section id="issue" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>
              <span class="c-flex c-flex--center u-tA--center">
                <span class="u-fC--gradient-dark">AIに</span>
                <span class="u-fC--gradient-dark">「正しく」</span>
                <span class="u-fC--gradient-dark">紹介されているのか？</span>
              </span>
            </h2>
          </div>
          <div class="p-lead u-mT4">
            <p>
              <span class="c-flex c-flex--center u-tA--center">
                <span>自社サービスがどのように要約され、</span>
                <span>ユーザーに届けられているのか？</span>
              </span>
              <span class="c-flex c-flex--center u-tA--center">
                <span>見えづらくなっている今、</span>
                <span>新たな機会損失を</span>
                <span>生んでるのかもしれません。</span>
              </span>
            </p>
          </div>
          <div class="p-point u-mT6">
            <div class="c-flex c-flex--center">
              <div class="c-box--dark">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-dark u-tA--center">流入の不透明性</h3>
                  <p class="u-mT2">
                    どのようなキーワード・文脈から紹介されているのか？<br>
                    ユーザーがAIに何を問いかけた結果、自社が表示されるのか把握できていない。
                  </p>
                </div>
              </div>
              <div class="c-box--dark">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-dark u-tA--center">競合比較の不在</h3>
                  <p class="u-mT2">
                    競合サービスと比べて、どう評価されているのか？<br>
                    AI視点での自社の立ち位置や、競合優位性が不明確。
                  </p>
                </div>
              </div>
              <div class="c-box--dark">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-dark u-tA--center">対策の欠如</h3>
                  <p class="u-mT2">
                    要約を変えていくために、何から手をつければいいのか？<br>
                    具体的な改善アクション（SEO？広報？）が見出せない。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- feature -->
    <section id="feature" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>
              <span class="c-flex c-flex--center u-tA--center">
                <span class="u-fC--gradient-light">AIに「正しく」</span>
                <span class="u-fC--gradient-light">理解される構造へ</span>
              </span>
            </h2>
          </div>
          <div class="p-lead u-mT4">
            <p>
              <span class="c-flex c-flex--center u-tA--center">
                <span>AIVALUEは、</span>
                <span>引用・評価・文脈を可視化し、</span>
                <span>メディアの構造最適化を支援します。</span>
              </span>
            </p>
          </div>
          <div class="p-point u-mT6">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">AI View Audit</h3>
                  <p class="u-mT2">各AIがどの文脈であなたの記事を参照しているかを把握</p>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">Interpretation Design</h3>
                  <p class="u-mT2">AIが拾いやすい評価ブロック設計を提供</p>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">Trust Management</h3>
                  <p class="u-mT2">記事構造変更がAI回答に与える影響を可視化</p>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">Real-time Insight</h3>
                  <p class="u-mT2">AIにおける評価ポジションを数値化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- commonContact -->
    <section id="commonContact" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>
              <span class="c-flex c-flex--center">
                <span class="u-fC--white u-tA--center">AI時代の評価基準を、</span>
                <span class="u-fC--white u-tA--center">あなたのメディアから。</span>
              </span>
            </h2>
          </div>
          <div class="p-lead u-mT4">
            <p>
              <span class="c-flex c-flex--center u-tA--center">
                <span>事例やデモのご案内・お見積り等、</span>
                <span>ご不明点ございましたら</span>
              </span>
              <span class="c-flex c-flex--center u-tA--center">
                <span>お気軽にお問い合わせ・ご相談ください</span>
              </span>
            </p>
          </div>
          <div class="m-button u-mT4">
            <div class="c-flex c-flex--center">
              <nuxt-link to="/contact" class="c-btn--white c-hover--fade u-fS--lg">
                <span>お問い合わせ</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* background */
#background .p-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
#background .p-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
}
/* hero */
#hero {
  width: 100%;
  height: 100dvh;
  padding: 0;
  background-color: rgb(0 0 0 / 70%);
}
#hero .p-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
#hero .p-container .c-inner {
  height: 100%;
}
#hero .p-content {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
#hero .p-content-headline h1 {
  font-size: 56px;
  line-height: 1.4;
  color: var(--color-white);
}
#hero .p-content-headline p {
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-white);
}
#hero .p-content-text p {
  font-size: var(--font-size-lg);
  color: var(--color-white);
}
#hero .p-content-button > .c-flex {
  gap: var(--base);
}
/* issue */
#issue {
  /*
  background-color: var(--color-block);
  background-image: url(~/assets/img/home/issue-bg.jpg);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  */
  padding: calc(var(--base) * 12) 0 calc(var(--base) * 20);
  /* ベースの暗いグラデーション */
  background: radial-gradient(ellipse at top left, #1a0a2e 0%, #0d0d1a 40%, #0a0a14 100%);
  /* 青紫の霧のような光彩を重ねる */
  background:
    radial-gradient(ellipse 60% 40% at 15% 70%, rgba(30, 80, 120, 0.45) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 85% 65%, rgba(60, 20, 100, 0.4) 0%, transparent 70%),
    radial-gradient(ellipse 80% 60% at 50% 110%, rgba(10, 40, 80, 0.5) 0%, transparent 60%),
    radial-gradient(ellipse at top left, #1e0a3c 0%, #0d0d1a 50%, #080810 100%);
}
#issue .p-headline h2 {
  font-size: 48px;
}
#issue .p-point > .c-flex {
  gap: calc(var(--base) * 4);
}
#issue .p-point > .c-flex > * {
  flex: 1;
  padding: calc(var(--base) * 4);
}
#issue .p-lead p {
  font-size: var(--font-size-xl);
  color: var(--color-white);
}
#issue .p-point-content h3 {
  font-size: 24px;
}
#issue .p-point-content p {
  color: var(--color-white);
}
/* feature */
#feature {
  padding: calc(var(--base) * 12) 0 calc(var(--base) * 20);
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200, 230, 255, 0.6) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 10% 100%, rgba(180, 210, 255, 0.3) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 90% 80%, rgba(200, 180, 255, 0.2) 0%, transparent 60%),
    #f0f4f8;
}
#feature .p-headline h2 {
  font-size: 48px;
}
#feature .p-point > .c-flex {
  gap: calc(var(--base) * 4);
}
#feature .p-point > .c-flex > * {
  width: calc( (100% - (var(--base) * 4)) / 2);
  padding: calc(var(--base) * 4);
}
#feature .p-lead p {
  font-size: var(--font-size-xl);
}
#feature .p-point-content h3 {
  font-size: 24px;
}
@media screen and (max-width: 1120px) {
  /* hero */
  #hero .p-content-headline h1 {
    font-size: calc(56 * var(--base-vw-coef));
  }
  /* issue */
  #issue .p-headline h2 {
    font-size: calc(48 * var(--base-vw-coef));
  }
  #issue .p-point-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(48 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
}
@media screen and (max-width: 960px) {
  /* hero */
  #hero .p-content-headline h1 {
    font-size: calc(52 * var(--base-vw-coef));
  }
  /* issue */
  #issue .p-headline h2 {
    font-size: calc(45 * var(--base-vw-coef));
  }
  #issue .p-point-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #issue .p-point > .c-flex > * {
    flex: none;
    width: 70%;
    padding: calc(var(--base) * 4) calc(var(--base) * 4) calc(var(--base) * 6);
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(45 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #feature .p-point > .c-flex {
    gap: calc(var(--base) * 2) calc(var(--base) * 2);
  }
  #feature .p-point > .c-flex > * {
    width: calc( (100% - (var(--base) * 2)) / 2);
    padding: calc(var(--base) * 4) calc(var(--base) * 3) calc(var(--base) * 5);
  }
}
@media screen and (max-width: 640px) {
  /* hero */
  #hero .p-content-headline h1 {
    font-size: calc(49 * var(--base-vw-coef));
  }
  /* issue */
  #issue .p-headline h2 {
    font-size: calc(34 * var(--base-vw-coef));
  }
  #issue .p-point-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #issue .p-point > .c-flex {
    gap: calc(var(--base) * 4);
  }
  #issue .p-point > .c-flex > * {
    width: 90%;
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(34 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #feature .p-point > .c-flex {
    gap: calc(var(--base) * 2);
  }
  #feature .p-point > .c-flex > * {
    width: 100%;
  }
}
</style>
