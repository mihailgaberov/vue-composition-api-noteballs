import { defineStore } from "pinia"

export const useNotesStore = defineStore('storeNotes', {
    state: () => ({
        notes: [
            {
                id: 1,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
            },
            {
                id: 2,
                content: 'This is shorter.',
            }
        ]
    }),
    actions: {
        addNote(note) {
            const id = new Date().getTime().toString()

            this.notes.unshift({
                id,
                content: note
            });

        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(({ id }) => id !== idToDelete)
        },
        editNote({ index, note }) {
            this.notes[index] = note
        }
    }
})