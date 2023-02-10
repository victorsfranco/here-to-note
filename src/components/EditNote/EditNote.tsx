import { useState, FunctionComponent } from 'react';

import styles from './EditNote.module.css'

type noteText = string

interface EditNoteProps {
  handleNoteAddition: (noteContent: string) => void;
}

const EditNote: FunctionComponent<EditNoteProps> = ({handleNoteAddition}) => {

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