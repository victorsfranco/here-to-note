import Note from '../Note/Note';
import styles from './AllNotes.module.css'

type Note = {
  content: string;
  id: string;
}

const AllNotes = ({currentNotes, handleNoteDeletion}: any) => {
  console.log(currentNotes)
  return (
    <div className={styles.allNotes}>

      {currentNotes.map((i: Note) => (

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