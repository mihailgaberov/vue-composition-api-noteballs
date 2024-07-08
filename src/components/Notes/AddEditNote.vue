<template>
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
        <label v-if="label" class="label has-text-white">{{ label }}</label>
        <div class="field">
            <div class="control">
                <textarea
                  v-model="internalValue"
                  v-auto-focus
                  maxlength="100"
                  :placeholder="placeholder"
                  @input="updateValue"
                  class="textarea"
                  ref="textAreaRef"
                />
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
import { vAutoFocus } from '@/directives/vAutoFocus';
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        default: 'success',
    },
    placeholder: {
        type: String,
        default: 'Add a new note',
    },
    label: {
        type: String,
    },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

const updateValue = () => {
    emit('update:modelValue', internalValue.value);
};

watch(() => props.modelValue, (newValue) => {
    internalValue.value = newValue;
});

const textAreaRef = ref(null);

const focusTextarea = () => {
    textAreaRef.value.focus();
};

defineExpose({
    focusTextarea,
});
</script>
