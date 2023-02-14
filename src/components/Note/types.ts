export interface NoteProps {
  note: {
    content: string;
    id: string;
  },
  handleNoteDeletion: (id: string) => void,
  handleShowNote: (noteId: string) => void
}