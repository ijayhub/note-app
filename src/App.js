
import React from 'react'
import Notes from './components/Notes';
import TitleToggle from './components/TitleToggle';




const App = () => {
  const [darkMode, setDarkMode] =React.useState(false);
  return (
		<>
			<div className={`${darkMode && 'dark-mode'}`}>
				<div>
					<TitleToggle handleToggleDarkMode={setDarkMode} />
				</div>
				<div className='container'>
					<Notes />
				</div>
			</div>
		</>
	);
}

export default App