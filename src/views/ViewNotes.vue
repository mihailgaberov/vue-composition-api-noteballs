<template>
    <div class="notes">
        <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note...">
            <template #buttons>
                <button :disabled="!newNote" @click="addNote" class="button is-link has-background-success">Add New
                    Note</button>
            </template>
        </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import { useNotesStore } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const newNote = ref('');
const addEditNoteRef = ref(null);

const storeNotes = useNotesStore();

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
};
</script>