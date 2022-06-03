import React from 'react'

const TitleToggle = ({handleToggleDarkMode}) => {
    return (
        <>
            <div className="toggle-title">
                <header>
                    <h1 className="title">Note App</h1>
                </header>
                <button type="button" className="btn"onClick={() => handleToggleDarkMode((previousDarkMode) =>!previousDarkMode)} >
                    Toggle mode 
                </button>
            </div>    
        </>

    )
}

export default TitleToggle
