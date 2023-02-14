import Note from '../Note/Note'
import styles from './AllNotes.module.css'
import { AppProps } from '../../app/types'
import { FunctionComponent } from 'react'
import { AllNoteProps } from './types'

const AllNotes: FunctionComponent<AllNoteProps> = ({currentNotes, handleNoteDeletion, handleShowNote}) => {
  return (
    <div className={styles.allNotes}>

      {currentNotes.map((i: AppProps) => (

        <Note
          key={i.id}
          note={i}
          handleNoteDeletion={handleNoteDeletion}
          handleShowNote={handleShowNote}
        />
      ))}

    </div>
  )
}

export default AllNotes;