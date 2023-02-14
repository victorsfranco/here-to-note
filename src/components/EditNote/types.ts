export interface EditNoteProps {
  handleNoteAddition: (noteContent: string) => void;
  noteBeeingEdited: null | string;
  currentNotes: {
    id: string,
    content: string;
  }[],
  handleWriteNewNote: () => void
}

export type noteText = string