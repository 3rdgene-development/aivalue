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
    title: 'Google AI Overview 監視ツール | AIバリュー',
    meta: [
      { name: 'description', content: 'AIバリューでは、検索クエリ毎でのAIO表示状況、自社・競合の引用状況を自動監視ツールを提供しています。ご興味がある方はお問い合わせください。' },
      { property: 'og:title', content: 'Google AI Overview 監視ツール | AIバリュー' },
      { property: 'og:description', content: 'AIバリューでは、検索クエリ毎でのAIO表示状況、自社・競合の引用状況を自動監視ツールを提供しています。ご興味がある方はお問い合わせください。' },
      { property: 'og:url', content: 'https://aival.jp/keyword' }
    ],
    link: [
    ],
    bodyAttrs: {
      id: '',
    }
  })
</script>

<template>
  <article>
    <!-- background -->
    <section id="background">
      <div class="p-background">
      </div>
    </section>
    <!-- hero -->
    <section id="hero" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-content">
            <div class="c-flex">
              <div>
                <div class="p-content-headline">
                  <h1>
                    Google AI Overview<br>監視ツール
                  </h1>
                </div>
                <div class="p-content-text u-mT4">
                  <p>
                    <span class="c-flex">
                      <span>検索クエリ毎でのAIO表示状況、</span>
                      <span>自社・競合の引用状況を自動監視。</span>
                    </span>
                  </p>
                  <p>
                    <span class="c-flex">
                      <span>週次データで変化を記録し、</span>
                      <span>戦略立案に活用できます。</span>
                    </span>
                  </p>
                </div>
                <div class="p-content-button u-mT4">
                  <div class="c-flex">
                    <nuxt-link to="/" class="c-btn--1st c-hover--fade">
                      <span>お問い合わせ</span>
                    </nuxt-link>
                  </div>
                  <div class="u-mT1">
                    <p class="u-fS--sm u-fW--700">※主にアフィリエイトASP事業者向けのサービスです</p>
                  </div>
                </div>
              </div>
              <div>
                <HeroAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- introduction -->
    <section id="introduction" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>検索エンジンの<br class="is-sp">パラダイムシフト</h2>
          </div>
          <div class="p-lead u-mT2">
            <p>検索エンジンの検索結果が「情報の入り口」から「回答そのもの」へ変化してきています</p>
          </div>
          <div class="p-point u-mT4">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">従来の検索エンジン対策</h3>
                  <ul class="u-mT2">
                    <li>検索上位表示で確実な流入</li>
                    <li>コンテンツ量が成果に直結</li>
                    <li>狙ったキーワードでランキング</li>
                  </ul>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">AIO時代の検索エンジン対策</h3>
                  <ul class="u-mT2">
                    <li>AIに引用されないと認知されない</li>
                    <li>引用元の選定基準が不透明</li>
                    <li>日々の変動が大きい</li>
                  </ul>
                </div>
              </div>
              <div class="c-box--accent u-w100p">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-accent">ポイント</h3>
                  <p class="u-mT2">
                    SEOメディアを多数把握しているアフィリエイトASPは本来有利な立場にあります。<br>
                    しかし、「どの検索クエリでAI Overviewが表示されているか」「自社や競合がどう扱われているか」を継続的に把握する手段がありませんでした。
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
            <h2>サービスの特徴</h2>
          </div>
          <div class="p-lead u-mT2">
            <p>AIVALUEが提供する3つの価値</p>
          </div>
          <div class="p-point u-mT4">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3>
                    <span class="c-flex c-flex--center">
                      <span class="u-fC--gradient-light">大量の検索クエリを監視</span>
                    </span>
                  </h3>
                  <p class="u-mT2">
                    重要な検索クエリを網羅的に監視することで、市場全体の動向を把握できます。<br>
                    段階的な拡大ではなく、最初から広範囲をカバーすることで、見逃しを防ぎます。
                  </p>
                </div>
                <div class="p-point-point c-box--accent u-mT4 u-p2">
                  <p class="u-fC--gradient-accent u-fW--700 u-tA--center">最低100キーワードから開始</p>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3>
                    <span class="c-flex c-flex--center">
                      <span class="u-fC--gradient-light">週次レポーティングの</span>
                      <span class="u-fC--gradient-light">自動化</span>
                    </span>
                  </h3>
                  <p class="u-mT2">
                    手動でのチェックは不要です。<br>
                    システムが自動で監視を実行し、週次でレポートを配信します。
                  </p>
                  <ul class="u-mT2">
                    <li>大量の検索クエリ群でのAIO表示チェック</li>
                    <li>競合他社との比較</li>
                    <li>変動の記録と分析</li>
                  </ul>
                </div>
                <div class="p-point-point c-box--accent u-mT4 u-p2">
                  <p class="u-fC--gradient-accent u-fW--700 u-tA--center">週次で自動配信</p>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3>
                    <span class="c-flex c-flex--center">
                      <span class="u-fC--gradient-light">引用元の可視化</span>
                    </span>
                  </h3>
                  <p class="u-mT2">
                    どのメディアがAIOに引用されているかを明確化します。<br>
                    キーワードごとの引用元とSEOメディアを紐付け、効果的なメディアを特定できます。
                  </p>
                  <p class="u-mT2">
                    自社コンテンツが引用されていない場合、どのメディアに記事を依頼すべきかが分かります。
                  </p>
                </div>
                <div class="p-point-point c-box--accent u-mT4 u-p2">
                  <p class="u-fC--gradient-accent u-fW--700 u-tA--center">効果的なメディアが判明</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- function -->
    <section id="function" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>機能一覧</h2>
          </div>
          <div class="p-lead u-mT2">
            <p>監視・記録できる項目</p>
          </div>
          <div class="p-point u-mT4">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">AIO表示の検知</h3>
                  <div class="u-mT2">
                    <p>対象キーワードでGoogle AI Overviewが表示されているかを自動チェック</p>
                  </div>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">自社情報の表示確認</h3>
                  <div class="u-mT2">
                    <p>AIO内で自社の情報が引用されているかを確認</p>
                  </div>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">競合の引用状況</h3>
                  <div class="u-mT2">
                    <p>ベンチマーク企業がAIOでどう扱われているかを監視</p>
                  </div>
                </div>
              </div>
              <div class="c-box--light">
                <div class="p-point-content">
                  <h3 class="u-fC--gradient-light">引用サイトの順序変動</h3>
                  <div class="u-mT2">
                    <p>AIO内でどのサイトが何番目に引用されているか、その順位変動を記録</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- flow -->
    <section id="flow" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>利用の流れ</h2>
          </div>
          <div class="p-lead u-mT2">
            <p>4ステップでデータ活用まで完結</p>
          </div>
          <div class="p-step u-mT4">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-step-content">
                  <h3 class="u-fC--gradient-light">
                    <span>STEP 0</span>
                    <span>事前準備</span>
                  </h3>
                </div>
                <div class="p-step-point u-mT2">
                  <div class="c-flex c-flex--center">
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">モニタリング対象</h4>
                      <p class="u-mT2">
                        監視したい検索クエリ
                      </p>
                    </div>
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">広告主情報</h4>
                      <p class="u-mT2">
                        広告主名、LP（URL）
                      </p>
                    </div>
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">競合情報</h4>
                      <p class="u-mT2">
                        競合他社名、LP（URL）<br>
                        ※最大〇社
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-step-arrow">
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
              </div>
              <div class="c-box--light">
                <div class="p-step-content">
                  <h3 class="u-fC--gradient-light">
                    <span>STEP 1</span>
                    <span>データ収集</span>
                  </h3>
                  <ul class="u-mT2">
                    <li>対象キーワードにAIOが表示されているか</li>
                    <li>AIOの内容に広告主・競合が表示されているか</li>
                    <li>広告主または競合のLPが引用されているか</li>
                    <li>競合はAIOに引用されているか</li>
                  </ul>
                </div>
              </div>
              <div class="p-step-arrow">
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
              </div>
              <div class="c-box--light">
                <div class="p-step-content">
                  <h3 class="u-fC--gradient-light">
                    <span>STEP 2</span>
                    <span>データ分析・提供</span>
                  </h3>
                  <div class="u-mT2">
                    <p>CSV形式またはLookerダッシュボードでご提供</p>
                  </div>
                </div>
                <div class="p-step-point u-mT2">
                  <div class="c-flex c-flex--center">
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">週次データ蓄積</h4>
                      <p class="u-mT2">
                        継続的な変化を記録
                      </p>
                    </div>
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">AIO表示状況</h4>
                      <p class="u-mT2">
                        可視化レポート
                      </p>
                    </div>
                    <div class="c-box--accent">
                      <h4 class="u-fC--gradient-accent">引用メディア</h4>
                      <p class="u-mT2">
                        詳細な可視化
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-step-arrow">
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
              </div>
              <div class="c-box--light">
                <div class="p-step-content">
                  <h3 class="u-fC--gradient-light">
                    <span>STEP 3</span>
                    <span>戦略的活用</span>
                  </h3>
                  <div class="u-mT2">
                    <p>データを基に、具体的なアクションを実行</p>
                  </div>
                  <ol class="u-mT2">
                    <li>効果的なSEOメディアを発見</li>
                    <li>競合の動きを把握し対策を練る</li>
                    <li>攻略キーワードごとの作戦立案</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- price -->
    <section id="price" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h2>料金</h2>
          </div>
          <div class="p-lead u-mT2">
            <p>シンプルな料金体系</p>
          </div>
          <div class="p-price u-mT4">
            <div class="c-flex c-flex--center">
              <div class="c-box--light">
                <div class="p-price-content">
                  <h3 class="u-fC--gradient-light">キーワード単位の明瞭会計</h3>
                  <p class="p-price-content-text u-mT2">
                    <span class="c-flex c-flex--bottom">
                      <span>¥300</span>
                      <span> / キーワード・月</span>
                    </span>
                  </p>
                  <ul class="u-mT2">
                    <li>初期費用なし</li>
                    <li>最低契約期間なし</li>
                    <li>必要なキーワードから段階的に拡大可能</li>
                    <li>CSV or Lookerでデータ提供</li>
                    <li>競合他社URL 最大〇社まで登録可能</li>
                  </ul>
                  <div class="u-mT2">
                    <p class="u-fS--sm">料金例：10キーワード監視 → 月額3,000円 ｜ 50キーワード監視 → 月額15,000円</p>
                  </div>
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
.l-wrap {
  padding-bottom: calc(var(--base) * 6);
}
/* background */
#background .p-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.035;
  background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: -1;
}
/* hero */
#hero {
  padding: calc(var(--base) * 12) 0 calc(var(--base) * 12);
}
#hero .p-content {
  width: 100%;
  max-width: 1080px;
  margin-inline: auto;
}
#hero .p-content-headline h1 {
  font-size: 48px;
  line-height: 1.4;
  color: var(--color-1st);
}
#hero .p-content-text p {
  font-size: var(--font-size-lg);
}
#hero .p-content-button > .c-flex {
  gap: var(--base);
}
#hero .p-content > .c-flex > *:nth-child(1) {
  flex: 1;
}
#hero .p-content > .c-flex > *:nth-child(2) {
  width: 440px;
}
/* introduction */
#introduction .p-headline h2 {
  font-size: 36px;
}
#introduction .p-point > .c-flex {
  gap: calc(var(--base) * 4);
}
#introduction .p-point > .c-flex > * {
  width: calc( (100% - (var(--base) * 4)) / 2);
  padding: calc(var(--base) * 4);
}
#introduction .p-lead p {
  font-size: var(--font-size-lg);
}
#introduction .p-point-content h3 {
  font-size: 24px;
}
/* feature */
#feature .p-headline h2 {
  font-size: 36px;
}
#feature .p-point > .c-flex {
  gap: calc(var(--base) * 4);
}
#feature .p-point > .c-flex > * {
  flex: 1;
  padding: calc(var(--base) * 4);
}
#feature .p-lead p {
  font-size: var(--font-size-xl);
}
#feature .p-point-content h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(2em * 1.6);
  font-size: 24px;
  text-align: center;
}
/* introduction */
#function .p-headline h2 {
  font-size: 36px;
}
#function .p-point > .c-flex {
  gap: calc(var(--base) * 2);
}
#function .p-point > .c-flex > * {
  width: 100%;
  padding: calc(var(--base) * 4);
}
#function .p-lead p {
  font-size: var(--font-size-lg);
}
#function .p-point-content h3 {
  font-size: 24px;
}
/* flow */
#flow .p-headline h2 {
  font-size: 36px;
}
#flow .p-step > .c-flex > * {
  width: 100%;
  padding: calc(var(--base) * 4);
}
#flow .p-lead p {
  font-size: var(--font-size-lg);
}
#flow .p-step-content h3 > span {
  display: flex;
}
#flow .p-step-content h3 > span:nth-of-type(2) {
  font-size: 24px;
}
#flow .p-step-point > .c-flex {
  gap: calc(var(--base) * 4);
}
#flow .p-step-point > .c-flex > * {
  flex: 1;
  padding: calc(var(--base) * 3) calc(var(--base) * 3) calc(var(--base) * 4)  
}
#flow .p-step-point h4 {
  font-size: 20px;
}
#flow .p-step-arrow {
  text-align: center;
  padding: calc(var(--base) * 1.5) 0 !important;
}
#flow .p-step-arrow span {
  font-size: 48px;
}
/* price */
#price {
  padding-bottom: calc(var(--base) * 18);
}
#price .p-headline h2 {
  font-size: 36px;
}
#price .p-price > .c-flex {
  gap: calc(var(--base) * 2);
}
#price .p-price > .c-flex > * {
  width: 100%;
  padding: calc(var(--base) * 4);
}
#price .p-lead p {
  font-size: var(--font-size-lg);
}
#price .p-price-content h3 {
  font-size: 24px;
}
#price .p-price-content-text > .c-flex > span {
  line-height: 1;
}
#price .p-price-content-text > .c-flex > span:nth-of-type(1) {
  font-size: 48px;
  font-weight: 700;
  margin-right: var(--base);
}
#price .p-price-content-text > .c-flex > span:nth-of-type(2) {
  padding-bottom: calc(var(--base) * 0.75);
}
@media screen and (max-width: 1120px) {
  /* hero */
  #hero .p-content-headline h1 {
    font-size: calc(48 * var(--base-vw-coef));
  }
  /* introduction */
  #introduction .p-headline h2 {
    font-size: calc(36 * var(--base-vw-coef));
  }
  #introduction .p-point-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(36 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
  /* function */
  #function .p-headline h2 {
    font-size: calc(36 * var(--base-vw-coef));
  }
  #function .p-point-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
  /* flow */
  #flow .p-headline h2 {
    font-size: calc(36 * var(--base-vw-coef));
  }
  #flow .p-step-content h3 > span:nth-of-type(2) {
    font-size: calc(24 * var(--base-vw-coef));
  }
  #flow .p-step-point h4 {
    font-size: calc(20 * var(--base-vw-coef));
  }
  #flow .p-step-arrow span {
    font-size: calc(48 * var(--base-vw-coef));
  }
  /* price */
  #price .p-headline h2 {
    font-size: calc(36 * var(--base-vw-coef));
  }
  #price .p-price-content h3 {
    font-size: calc(24 * var(--base-vw-coef));
  }
  #price .p-price-content-text > .c-flex > span:nth-of-type(1) {
    font-size: calc(48 * var(--base-vw-coef));
  }
}
@media screen and (max-width: 960px) {
  /* hero */
  #hero .p-content-headline h1 {
    font-size: calc(45 * var(--base-vw-coef));
  }
  #hero .p-content > .c-flex {
    gap: calc(var(--base)* 8);
    flex-direction: column;
    align-items: center;
  }
  /* introduction */
  #introduction .p-headline h2 {
    font-size: calc(33 * var(--base-vw-coef));
  }
  #introduction .p-point-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #introduction .p-point > .c-flex {
    gap: calc(var(--base) * 2) calc(var(--base) * 2);
  }
  #introduction .p-point > .c-flex > * {
    width: calc( (100% - (var(--base) * 2)) / 2);
    padding: calc(var(--base) * 4) calc(var(--base) * 3) calc(var(--base) * 5);
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(33 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #feature .p-point > .c-flex > * {
    flex: none;
    width: 70%;
    padding: calc(var(--base) * 4) calc(var(--base) * 4) calc(var(--base) * 6);
  }
  /* function */
  #function .p-headline h2 {
    font-size: calc(33 * var(--base-vw-coef));
  }
  #function .p-point-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #function .p-point > .c-flex > * {
    padding: calc(var(--base) * 4) calc(var(--base) * 3) calc(var(--base) * 5);
  }
  /* flow */
  #flow .p-headline h2 {
    font-size: calc(33 * var(--base-vw-coef));
  }
  #flow .p-step-content h3 > span:nth-of-type(2) {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #flow .p-step > .c-flex > * {
    padding: calc(var(--base) * 4) calc(var(--base) * 3) calc(var(--base) * 5);
  }
  #flow .p-step-point > .c-flex {
    gap: calc(var(--base) * 2);
  }
  #flow .p-step-point > .c-flex > * {
    flex: none;
    width: 100%;
  }
  #flow .p-step-point h4 {
    font-size: calc(18 * var(--base-vw-coef));
  }
  #flow .p-step-arrow span {
    font-size: calc(45 * var(--base-vw-coef));
  }
  /* price */
  #price .p-headline h2 {
    font-size: calc(33 * var(--base-vw-coef));
  }
  #price .p-price-content h3 {
    font-size: calc(22 * var(--base-vw-coef));
  }
  #price .p-price > .c-flex > * {
    padding: calc(var(--base) * 4) calc(var(--base) * 3) calc(var(--base) * 5);
  }
  #price .p-price-content-text > .c-flex > span:nth-of-type(1) {
    font-size: calc(45 * var(--base-vw-coef));
  }
}
@media screen and (max-width: 640px) {
  /* hero */
  #hero {
    padding: calc(var(--base) * 8) 0 calc(var(--base) * 16);
  }
  #hero .p-content-headline h1 {
    font-size: calc(35 * var(--base-vw-coef));
  }
  #hero .p-content > .c-flex {
    gap: calc(var(--base)* 6);
    flex-direction: column;
    align-items: center;
  }
  #hero .p-content > .c-flex > *:nth-child(2) {width: 100%;}
  /* introduction */
  #introduction .p-headline h2 {
    font-size: calc(29 * var(--base-vw-coef));
  }
  #introduction .p-point-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #introduction .p-point > .c-flex {
    gap: calc(var(--base) * 2);
  }
  #introduction .p-point > .c-flex > * {
    width: 100%;
  }
  /* feature */
  #feature .p-headline h2 {
    font-size: calc(29 * var(--base-vw-coef));
  }
  #feature .p-point-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #feature .p-point > .c-flex {
    gap: calc(var(--base) * 4);
  }
  #feature .p-point > .c-flex > * {
    width: 90%;
  }
  /* function */
  #function .p-headline h2 {
    font-size: calc(29 * var(--base-vw-coef));
  }
  #function .p-point-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  /* flow */
  #flow .p-headline h2 {
    font-size: calc(29 * var(--base-vw-coef));
  }
  #flow .p-step-content h3 > span:nth-of-type(2) {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #flow .p-step-point > .c-flex {
    gap: calc(var(--base) * 2);
  }
  #flow .p-step-point > .c-flex > * {
    padding: calc(var(--base) * 2) calc(var(--base) * 2) calc(var(--base) * 3);
  }
  #flow .p-step-point h4 {
    font-size: calc(16 * var(--base-vw-coef));
  }
  #flow .p-step-arrow span {
    font-size: calc(39 * var(--base-vw-coef));
  }
  /* price */
  #price .p-headline h2 {
    font-size: calc(29 * var(--base-vw-coef));
  }
  #price .p-price-content h3 {
    font-size: calc(21 * var(--base-vw-coef));
  }
  #price .p-price-content-text > .c-flex > span:nth-of-type(1) {
    font-size: calc(39 * var(--base-vw-coef));
  }
}
</style>
