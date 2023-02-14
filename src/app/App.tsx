import { useState } from 'react'
import styles from './App.module.css'
import {v4 as uuidv4} from 'uuid';

import AllNotes from '../components/AllNotes/AllNotes'
import EditNote from '../components/EditNote/EditNote'
import Header from '../components/Header/Header'

import { IsEditingNote, NoteProp } from './types';

const App = (): JSX.Element => {
  const [currentNotes, setCurrentNotes] = useState<NoteProp[]>([]);
  const [noteBeeingEdited, setNoteBeeingEdited] = useState<IsEditingNote>(null);
  
  /* Function that manipulate the currentNotes array. This function add a new note in the currentNotes array, receiving as argument the new note to be added. */
  const handleNoteAddition = (noteContent: string): void => {

    const newNotes = [
      ...currentNotes,
      {
        content: noteContent,
        id: uuidv4(),
      },
    ];

    if (noteContent != '') {
      setCurrentNotes(newNotes);
    }
  }

  const handleNoteDeletion = (noteId: string) => {
    const updatedNotes = currentNotes.filter(note => note.id != noteId);
    setCurrentNotes(updatedNotes)
  }

  const handleShowNote = (noteId: string): void => {
    setNoteBeeingEdited(noteId)
  }

  const handleWriteNewNote = () => {
    setNoteBeeingEdited(null)
  }

  return (
    <div className={styles.appContainer}>
      <Header/>
      <AllNotes currentNotes={currentNotes} handleNoteDeletion={handleNoteDeletion} handleShowNote={handleShowNote}/>
      <EditNote
        currentNotes={currentNotes}
        handleNoteAddition={handleNoteAddition}
        noteBeeingEdited={noteBeeingEdited}
        handleWriteNewNote={handleWriteNewNote}
      />

    </div>
  )
}

export default App
