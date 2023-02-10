import { ReactNode, useState, FunctionComponent } from 'react';

import styles from './EditNote.module.css'

type noteText = string

interface EditNoteProps {
  handleNoteAddition: (noteContent: string) => void;
}

const EditNote: FunctionComponent<EditNoteProps> = ({handleNoteAddition}) => {

  const [inputData, setInputData] = useState<noteText>('');
  
  // Function that capture the textArea element and set it to inputData variable
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value);
  }

  
  const handleSaveNote = () => {
    handleNoteAddition(inputData.trim());
    setInputData('');
  }

  return (
    <div className={styles.editNote} >
      <button onClick={handleSaveNote}>save</button>
      <textarea
        placeholder='Start to write a new Note!'
        value={inputData}
        className={styles.textArea}
        cols={30}
        rows={10}
        onChange={handleInputChange}
      >
      </textarea>
    </div>
  )
}

export default EditNote;