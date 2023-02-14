import { FunctionComponent } from 'react';
import styles from './Note.module.css'
import {CgTrash} from 'react-icons/cg'

import { NoteProps } from './types';

const Note: FunctionComponent<NoteProps>= ({note, handleNoteDeletion, handleShowNote}) => {

  const handleTrashClick = () => {
    handleNoteDeletion(note.id)
  }

  const handleNoteClick = () => {
    handleShowNote(note.id)
  }

  const getTime = () => {
    const dateTime = new Date().toLocaleDateString(
      'pt-br', {hour: '2-digit', minute: '2-digit'})
      return dateTime
  }

  return (

    <div
    className={styles.noteContainer}>
      <div
        className={styles.textContainer}
        onClick={handleNoteClick}
      >
        <p>{note.content.length > 22 ? note.content.substring(0,21) + '...' : note.content}</p>
        <span>{getTime()}</span>
      </div>
      <div className={styles.iconsContainer}>
        <CgTrash className={styles.deleteIcon} onClick={handleTrashClick}/>
      </div>

    </div>
  )
}

export default Note;