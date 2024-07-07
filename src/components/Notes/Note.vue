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
            <a href="#" class="card-footer-item">Edit</a>
            <a @click.prevent="handleDeleteClick(note.id)" href="#" class="card-footer-item">
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(['delete-note'], note.id)

const characterLength = computed(() => {
    const length = props.note.content.length;
    const description = length > 1 ? 'characters' : 'character';
    return `${length} ${description}`
})

const handleDeleteClick = (id) => {
    emit('delete-note', id)
}
</script>