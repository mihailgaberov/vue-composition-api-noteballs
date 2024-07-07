<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Add a new note" />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!newNote" @click="addNote" class="button is-link has-background-success">Add New
                        Note</button>
                </div>
            </div>
        </div>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" @delete-note="deleteNote" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import { useNotesStore } from '@/stores/storeNotes';

const newNote = ref('');
const newNoteRef = ref(null);

const storeNotes = useNotesStore();

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value.focus()
};

// const deleteNote = (id) => {
//     notes.value = notes.value.filter((note) => note.id !== id);
// };
</script>