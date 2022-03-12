import { useEffect, useState } from "react"
import { getQuote } from "../apis/quoteApi"
import { Quote } from "../types"

export const useQuoteLoader: (refresh: number) => Quote = (refresh) => {
	const [quote, setQuote] = useState<Quote>({
		quote: '',
		imageUrl: '',
		author: '',
	})

	useEffect(() => {
		getQuote().then(setQuote);
	}, [])

	useEffect(() => {
		const id = setInterval(() => {
			getQuote().then(setQuote)
		}, refresh * 1000)

		return () => {
			clearInterval(id)
		}
	}, [refresh])

	return quote
};
