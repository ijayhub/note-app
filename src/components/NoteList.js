import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import AddNotes from './AddNotes';

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
    
    return (
        <>
            
				{notes.map((note) => (
					<div className='note' key={note.id}>
						<div>
							<header className='note-header'>{note.text}</header>
						</div>
						<div className='note-footer'>
							<small>{note.date}</small>
							<MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(note.id)} />
						</div>
					</div>
				))}
				<AddNotes handleAddNote={handleAddNote} />
			</>
		);
}

export default NoteList
