import { useState } from 'react'
import styles from './App.module.css'
import {v4 as uuidv4} from 'uuid';

import AllNotes from './components/AllNotes/AllNotes'
import EditNote from './components/EditNote/EditNote'
import Header from './components/Header/Header'

interface Note {
  content: string
  id: string
}

const App = (): JSX.Element => {
  const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
 
  
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

  return (
    <div className={styles.appContainer}>
      <Header/>
      <AllNotes currentNotes={currentNotes} handleNoteDeletion={handleNoteDeletion} />
      <EditNote handleNoteAddition={handleNoteAddition}/>
    </div>
  )
}

export default App
