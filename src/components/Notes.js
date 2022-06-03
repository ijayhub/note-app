import React, { useState } from 'react'

import { data } from '../components/data';
import NoteList from './NoteList';
import { nanoid } from 'nanoid';
// import TitleToggle from './TitleToggle';



const Notes = () => {
    const [notes, setNotes] = useState(data)
    // const[searchText, setSearchText] = useState('')
   
    const handleDeleteNote = (id) => {
        const newNote = notes.filter((note) => note.id !== id)
        setNotes(newNote)
}

    // this to make the save btn functional
    const addNote = (text) => {
        const date = new Date()
        const newNote = {
            id: nanoid(),
            text: text,
            date:date.toLocaleString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }
    
    return (
			<>
				<div className='note-list'>
                    <NoteList
                        notes={notes}
                        handleAddNote={addNote}
                        handleDeleteNote={handleDeleteNote}
                    />
                </div>
				
			</>
		);
}

export default Notes
