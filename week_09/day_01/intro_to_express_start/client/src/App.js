import './App.css';
import { useEffect, useState } from 'react';

function App() {

	const [message, setMessage] = useState("")

	useEffect(() => {
		fetch('http://localhost:9000/') 
			.then(res => res.json())
			.then(data => setMessage(data.message))
	})

	return (
		<>
			<h1>Intro to Express</h1>
			<p>The server said {message}</p>
		</>
	);
}

export default App;