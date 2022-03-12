import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';

interface Quote {
	author: string
	authorSlug: string
	content: string
	dateAdded: string
	dateModified: string
	length: number
	tags: string[]
	_id: string
}

interface QuoteResponse {
	quote: string
	imageUrl: string
	author: string
}

const getQuote: () => Promise<QuoteResponse> = async () => {
	const response = await axios.get<any, AxiosResponse<Quote>>('https://api.quotable.io/random')
	return {
		quote: response.data.content,
		author: response.data.author,
		imageUrl: "https://source.unsplash.com/random/1920x1080"
	}
}

function App() {
	const [quote, setQuote] = useState<QuoteResponse>({
		quote: '',
		imageUrl: '',
		author: ''
	})

  useEffect(() => {
    const id = setInterval(() => {
      getQuote().then(setQuote);
    }, 5000);
    return () => {
			clearInterval(id);
		}
  }, []);

	return (
		<div className='App' style={{ backgroundImage: `url(${quote.imageUrl})` }}>
			<div className='Quote'>
				<h1>
					&ldquo; {quote.quote} &rdquo;
				</h1>
				<span className='Author'>{quote.author}</span>
			</div>
		</div>
	)
}

export default App
