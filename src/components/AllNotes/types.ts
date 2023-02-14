export interface AllNoteProps{
  currentNotes: {
    content: string;
    id: string;
  }[],
  handleNoteDeletion: (id: string) => void,
  handleShowNote: (noteId: string) => void,
}