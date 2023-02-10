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

const App = ({}: any) => {
  const [currentNotes, setCurrentNotes] = useState<Note[]>([]);
 
  
  
  const handleNoteAddition = (noteContent: string) => {
    const newNotes = [
      ...currentNotes,
      {
        content: noteContent,
        id: uuidv4(),
      },
    ];

    if (noteContent != '') {
      setCurrentNotes(newNotes);
      // console.log(currentNotes)
    }
  }

  return (
    <div className={styles.appContainer}>
      <Header/>
      <AllNotes currentNotes={currentNotes} />
      <EditNote handleNoteAddition={handleNoteAddition}/>
    </div>
  )
}

export default App
