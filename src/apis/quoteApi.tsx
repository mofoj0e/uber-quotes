import axios, { AxiosResponse } from "axios"
import { ImageResponse, Quote, QuoteResponse } from "../types"

const baseQuoteUrl = 'https://api.quotable.io/random'
const baseImgUrl = 'https://dog.ceo/api/breeds/image/random'

export const getQuote: () => Promise<Quote> = async () => {
  const response = await axios.get<any, AxiosResponse<QuoteResponse>>(baseQuoteUrl)
  const imageResponse = await axios.get<any, AxiosResponse<ImageResponse>>(baseImgUrl)

  return {
    quote: response.data.content,
    author: response.data.author,
		imageUrl: imageResponse.data.message
  }
}
