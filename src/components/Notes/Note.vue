<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
            <div class="has-text-right has-text-grey-light m-2">
                <small>{{ characterLength }}</small>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">
                Delete
            </a>
        </footer>
        <ModalDeleteNote v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id" />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import ModalDeleteNote from './ModalDeleteNote.vue';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
})

const characterLength = computed(() => {
    const length = props.note.content.length;
    const description = length > 1 ? 'characters' : 'character';
    return `${length} ${description}`
})

/* modals */
const modals = reactive({
    deleteNote: false,
})
</script>