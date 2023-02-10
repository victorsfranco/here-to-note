import { FunctionComponent } from 'react';
import styles from './Note.module.css'

interface NoteProps {
  note: {
    content: string;
    id: string;
  }
}

const Note: FunctionComponent<NoteProps>= ({note}) => {
  // console.log(note.content)
  return (

    <div className={styles.noteContainer}>
      <p>{note.content}</p>
    </div>
  )
}

export default Note;