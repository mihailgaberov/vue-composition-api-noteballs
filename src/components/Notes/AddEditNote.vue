<template>
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
        <div class="field">
            <div class="control">
                <textarea ref="textAreaRef" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
                    placeholder="Add a new note" />
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        default: 'success',
    }
})

const emit = defineEmits(['update:modelValue'])

const textAreaRef = ref(null);

const focusTextarea = () => {
    textAreaRef.value.focus();
}

defineExpose({
    focusTextarea
})
</script>