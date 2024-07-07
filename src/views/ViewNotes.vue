<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea v-model="newNote" class="textarea" placeholder="Add a new note" />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!newNote" class="button is-link has-background-success" @click="addNote">Add New
                        Note</button>
                </div>
            </div>
        </div>
        <div class="card mb-4" v-for="note in notes" :key="note.id">
            <div class="card-content">
                <div class="content">
                    {{ note.content }}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newNote = ref('');

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
    notes.value.push({
        id: notes.value.length + 1,
        content: newNote.value,
    });
    newNote.value = '';
};
</script>