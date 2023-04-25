export interface EditNoteProps {
  handleNoteAddition: (noteContent: string) => void;
  noteBeingEdited: null | string;
  currentNotes: {
    id: string,
    content: string;
  }[],
  handleWriteNewNote: () => void
}

export type noteText = string