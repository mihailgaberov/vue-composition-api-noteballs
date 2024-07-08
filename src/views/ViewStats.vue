<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ notesStore.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ notesStore.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input v-auto-focus type="text" class="input" placeholder="Do you love Noteballs?" />
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';
import { vAutoFocus } from '@/directives/vAutoFocus';

const notesStore = useNotesStore();

</script>