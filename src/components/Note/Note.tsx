import { FunctionComponent } from 'react';
import styles from './Note.module.css'
import {CgTrash} from 'react-icons/cg'

import { NoteProps } from './types';

const Note: FunctionComponent<NoteProps>= ({note, handleNoteDeletion}) => {

  const handleTrashClick = () => {
    handleNoteDeletion(note.id)
  }

const handleNoteClick = () => {
  const selectedId: string = note.id;
  const selectedContent: string = note.content;
  console.log(selectedContent)
  console.log(selectedId)
}

  return (

    <div
    className={styles.noteContainer}>
      <div
        className={styles.textContainer}
        onClick={handleNoteClick}
      >
        <p>{note.content.length > 22 ? note.content.substring(0,21) + '...' : note.content}</p>
        <span>10/02/2023 12:00</span>
      </div>
      <div className={styles.iconsContainer}>
        <CgTrash className={styles.deleteIcon} onClick={handleTrashClick}/>
      </div>

    </div>
  )
}

export default Note;