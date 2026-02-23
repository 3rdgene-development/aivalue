<script setup lang="ts">
  const props = defineProps({
    id: {
      type: String
    },
    class: {
      type: String
    },
    fetchType: {
      type: String
    }
  })
</script>

<template>
  <div :id="id" class="m-pending" :class="class">
    <div class="c-loader-text-02 u-fS--lg u-fW--bold">
      <p v-if="fetchType === 'reload'">データを準備しています</p>
      <p v-else>データ集計中</p>
    </div>
    <div class="c-loader-border u-mT1"></div>
    <div v-if="fetchType === 'reload'" class="u-mT3">
      <p class="u-fS--sm">
        <span class="c-flex c-flex--center">
          <span>より快適な体験を提供するため、</span>
          <span>キャッシュを生成しています。</span>
        </span>
        <span class="c-flex c-flex--center">
          <span>少々お待ちください。</span>
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
