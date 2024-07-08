<template>
    <div class="edit-note">
        <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link" placeholder="Edit note..."
            label="Edit Note">
            <template #buttons>
                <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
                <button @click="handleSave" class="button is-link has-background-link" :disabled="!noteContent">Save
                    Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useNotesStore } from '@/stores/storeNotes';

const notesStore = useNotesStore();


const route = useRoute();
const router = useRouter();

const noteId = route.params.id;

const noteContent = ref('')
noteContent.value = notesStore.getNoteContent(noteId);

const handleSave = () => {
    const payload = {
        id: noteId,
        content: noteContent.value
    }
    notesStore.updateNoteContent(payload);
    router.back();
}
</script>