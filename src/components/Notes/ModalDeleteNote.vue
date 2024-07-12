<template>
    <div class="modal is-active p-2">
  <div class="modal-background"></div>
  <div class="modal-card" ref="modalCardRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note</p>
      <button @click="closeModal" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete the note?
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
      <div class="buttons">
          <button @click="closeModal" class="button">Cancel</button>
          <button class="button is-danger">Delete</button>
      </div>
    </footer>
  </div>
</div>
</template>

<script setup>
/* imports */
import { onClickOutside } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from "vue";

  /* props */

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    }
  })

  /* emit */
  const emit = defineEmits(['update:modelValue']);

  /* close modal */
  const closeModal = () => {
    emit('update:modelValue', false);
  }


const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

/* keyboard control */
onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  document.addEventListener('keydown', handleKeydown);

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
  })
})
</script>