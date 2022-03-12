export interface Quote {
  quote: string;
  author: string;
  imageUrl: string;
}

export interface QuoteResponse {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

export interface ImageResponse {
  message: string;
}

