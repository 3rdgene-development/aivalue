<script setup lang="ts">
  const { $onMounted, $onSubmitForm } = useNuxtApp()

  /**
   * onMounted
   */
  onMounted(() => {
    $onMounted()
  })

  /**
   * onUnmounted
   */
  onUnmounted(() => {
  })

  /**
   * BASE
   */
  definePageMeta({
    layout: 'default'
  })
  useHead({
    title: 'お問い合わせ | AIバリュー - AIVALUE',
    meta: [
      { name: 'description', content: '「AIバリュー」の問い合わせフォームーページになります。' },
      { property: 'og:title', content: 'お問い合わせ | AIバリュー - AIVALUE' },
      { property: 'og:description', content: '「AIバリュー」の問い合わせフォームーページになります。' },
      { property: 'og:url', content: 'https://aival.jp/contact' }
    ],
    bodyAttrs: {
      id: '',
    }
  })
</script>

<template>
  <article>
    <section id="" class="l-wrap">
      <div class="p-container">
        <div class="c-inner">
          <div class="p-headline">
            <h1>問い合わせフォーム</h1>
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
          <div class="p-form c-block--md u-mT5">
            <form action="" class="m-form" form-id="contact">
              <div class="m-form-result" form-result></div>
              <div class="m-form-input">
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>氏名</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      class="u-w100p"
                      placeholder=""
                      form-required=""
                    >
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>会社名</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      class="u-w100p"
                      placeholder=""
                      form-required=""
                    >
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>メールアドレス</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      class="u-w100p"
                      placeholder=""
                      form-required="email"
                    >
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>電話番号</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="tel"
                      class="m-form-input-tel"
                      placeholder=""
                      form-required="number"
                    >
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>お問い合わせ種別</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <select
                      name="about"
                      form-required
                    >
                      <option value="">選択してください</option>
                      <option value="サービス">サービスの詳細が知りたい</option>
                      <option value="デモ">デモ版を使用したい</option>
                      <option value="その他">その他お問い合わせ</option>
                    </select>
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
                <div class="c-flex">
                  <div>
                    <p class="u-fW--bold">
                      <span>問い合わせ内容</span>
                      <span class="u-fS--xs u-fC--red u-mL1">必須</span>
                    </p>
                  </div>
                  <div>
                    <textarea
                      name="text"
                      class="u-w100p"
                      placeholder=""
                      form-required=""
                    ></textarea>
                    <div class="m-form-error" form-error></div>
                  </div>
                </div>
              </div>
              <div class="m-form-btn">
                <div class="c-flex c-flex--center">
                  <div>
                    <button class="c-btn--1st c-hover--fade" form-submit @click="$onSubmitForm">メール送信</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.p-headline h1 {
  font-size: 40px;
  text-align: center;
}
.p-form {
  padding: calc(var(--base) * 4) calc(var(--base) * 4) calc(var(--base) * 8);
  background-color: var(--color-white);
}
@media screen and (max-width: 1120px) {
  .p-headline h1 {
    font-size: calc(40 * var(--base-vw-coef));
  }
}
@media screen and (max-width: 960px) {
  .p-headline h1 {
    font-size: calc(37 * var(--base-vw-coef));
  }
}
@media screen and (max-width: 640px) {
  .p-headline h1 {
    font-size: calc(32 * var(--base-vw-coef));
  }
  .p-form {
    padding: calc(var(--base) * 3) calc(var(--base) * 3) calc(var(--base) * 6);
  }
}
</style>
