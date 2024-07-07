<template>
    <div class="edit-note">
        <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link">
            <template #buttons>
                <button class="button is-link has-background-success" :disabled="!noteContent">Save Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const noteContent = ref('');
</script>