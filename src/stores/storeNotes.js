import { defineStore } from "pinia"

export const useNotesStore = defineStore('storeNotes', {
    state: () => ({
        notes: [
            {
                id: '1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
            },
            {
                id: '2',
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
        updateNoteContent({ id, content }) {
            const index = this.notes.findIndex((note) => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                const note = state.notes.find((note) => note.id === id)
                return note ? note.content : ''
            }
        }
    }
})