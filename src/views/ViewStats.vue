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
        <input
          v-auto-focus
          class="input"
          placeholder="Do you love Noteballs?"
          type="text"
          v-model="loveNoteballs"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import { vAutoFocus } from '@/directives/vAutoFocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const notesStore = useNotesStore();

const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs);
</script>