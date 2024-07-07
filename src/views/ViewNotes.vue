<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Add a new note" />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success">Add New Note</button>
                </div>
            </div>
        </div>
        <div class="card mb-4" v-for="note in notes" :key="note.id">
            <div class="card-content">
                <div class="content">
                    {{ note.content }}
                    <br />
                    <small>{{ note.date }}</small>
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

const notes = ref([
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        date: '11:09 PM - 1 Jan 2016',
    },
    {
        id: 2,
        content: 'This is shorter.',
        date: '11:09 PM - 1 Jan 2016',
    },
    {
        id: 3,
        content: 'Another short one.',
        date: '11:09 PM - 1 Jan 2016',
    },
]);
</script>