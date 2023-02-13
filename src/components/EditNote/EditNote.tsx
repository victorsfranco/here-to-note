import { useState, FunctionComponent, useEffect } from 'react';

import { EditNoteProps, noteText } from './types';

import styles from './EditNote.module.css'

const EditNote: FunctionComponent<EditNoteProps> = ({handleNoteAddition, noteBeeingEdited, currentNotes}) => {

  const [inputData, setInputData] = useState<noteText>('');
  
  // Function that capture the textArea element and set it to inputData state.
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value);
  }

  /* Fuction that take the value of inputData state, and use it
  as argument of handleNoteAddition function. (handleNoteAddition docs in App.tsx) */
  const handleSaveNote = () => {
    handleNoteAddition(inputData.trim());
    setInputData('');
  }

  useEffect(() => {
    if (noteBeeingEdited !== null) {
      const result = currentNotes.find((i) => {
       return i.id === noteBeeingEdited
      })
      if (result) {
        setInputData(result.content)
      }
    }
  },[noteBeeingEdited])

  return (
    <div className={styles.editNote} >
      <textarea
        placeholder='Start to write a new Note!'
        value={inputData}
        className={styles.textArea}
        cols={30}
        rows={10}
        onChange={handleInputChange}
      >
      </textarea>
      <div className={styles.buttonContainer}>
        <button onClick={handleSaveNote}>Save</button>
      </div>
    </div>
  )
}

export default EditNote;