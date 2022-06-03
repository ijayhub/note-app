import React from 'react'

const AddNotes = ({handleAddNote}) => {
    const [noteText, setNoteText] = React.useState('')

    const handleChange = (e) => {
        
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }
    const characterLimit ='200'

    const handleSave = () => {

        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('')
        }
    }
    
    
    return (
			<div className='note new'>
				<div>
					<textarea
						name=''
						id=''
						cols='33'
						rows='9'
						value={noteText}
						onChange={handleChange}
						placeholder='Type to add Notes...'></textarea>
				</div>
				<div className='note-footer'>
					<small>{characterLimit-noteText.length} Remaining</small>
					<button className='save' onClick={handleSave}>
						Save
					</button>
				</div>
			</div>
		);
}

export default AddNotes
