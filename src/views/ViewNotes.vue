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
                    <button :disabled="!newNote" class="button is-link has-background-success" @click="addNote">Add New
                        Note</button>
                </div>
            </div>
        </div>
        <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    },
    {
        id: 2,
        content: 'This is shorter.',
    },
]);

const addNote = () => {
    const id = new Date().getTime().toString();
    notes.value.unshift({
        id,
        content: newNote.value,
    });
    newNote.value = '';
    newNoteRef.value.focus();
};
</script>