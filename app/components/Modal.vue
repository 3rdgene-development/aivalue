<script setup lang="ts">
  const props = defineProps({
    modalId: {
      type: String
    },
    modalOpen: {
      type: Boolean,
      required: true
    },
    modalRequired: {
      type: Boolean,
      default: false
    },
    modalWidth: {
      type: String,
      default: 'lg'
    },
  })
  const emits = defineEmits(['update:modalOpen'])
  const closeModal = () => {
    if (!props.modalRequired) {
      emits('update:modalOpen', false)
    }
  }
</script>

<template>
  <div class="m-modal" :modal-id="modalId" :modal-open="modalOpen" @click="closeModal">
    <div :modal-width="modalWidth" class="m-modal-content" @click.stop>
      <button v-if="!modalRequired" class="m-modal-close" @click="closeModal"></button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
