import "./App.css"
import { useQuoteLoader } from "./hooks/useQuoteLoader"

const REFRESH_INTERVAL_SECONDS = 5

function App() {
	const quote = useQuoteLoader(REFRESH_INTERVAL_SECONDS)

	return (
		<div className='App' style={{ backgroundImage: `url(${quote.imageUrl})` }}>
			<div className='Quote'>
				<h1> &ldquo; {quote.quote} &rdquo;</h1>)
				<span className='Author'>{quote.author}</span>
			</div>
		</div>
	);
}

export default App