import Note from '../Note/Note'
import styles from './AllNotes.module.css'
import { NoteProp } from '../../app/types'

const AllNotes = ({currentNotes, handleNoteDeletion}: any) => {
  return (
    <div className={styles.allNotes}>

      {currentNotes.map((i: NoteProp) => (

        <Note
          key={i.id}
          note={i}
          handleNoteDeletion={handleNoteDeletion}
        />
      ))}

    </div>
  )
}

export default AllNotes;