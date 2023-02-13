import { FunctionComponent } from 'react';
import styles from './Note.module.css'
import {CgTrash} from 'react-icons/cg'

interface NoteProps {
  note: {
    content: string;
    id: string;
  },
  handleNoteDeletion: any
}


const Note: FunctionComponent<NoteProps>= ({note, handleNoteDeletion}) => {
  const handleNoteClick = () => {
    handleNoteDeletion(note.id)
  }
  return (

    <div className={styles.noteContainer}>
      <div className={styles.textContainer}>
        <p>{note.content.length > 22 ? note.content.substring(0,21) + '...' : note.content}</p>
        <span>10/02/2023 12:00</span>
      </div>
      <div className={styles.iconsContainer}>
        <CgTrash className={styles.deleteIcon} onClick={handleNoteClick}/>
      </div>

    </div>
  )
}

export default Note;