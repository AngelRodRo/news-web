import axios, { AxiosRequestConfig } from 'axios'

import { VITE_NEWS_SEARCH_URL, VITE_RAPIDAPI_HOST, VITE_RAPIDAPI_KEY } from "../constants";

const normalizeImgData = (image: Image) => ({ imageUrl: image.url, imageThumbnail: image.thumbnail })

type NewsWithImage = News & { image: Image }

type ApiResult = {
  value: NewsWithImage[];
  totalCount: number;
}

type SearchNewsResult = {
  news: News[];
  totalCount: number;
}

export const searchNews = async (query: string, pageNumber: number, pageSize: number): Promise<SearchNewsResult | undefined> => {
  const searchURL = new URL(VITE_NEWS_SEARCH_URL);
  searchURL.searchParams.append('q', query);
  searchURL.searchParams.append('pageNumber', pageNumber.toString());
  searchURL.searchParams.append('pageSize', pageSize.toString());

  const requestOptions: AxiosRequestConfig = { 
    method: 'GET', 
    headers: { 
      'Content-Type': 'application/json',
      'x-rapidapi-key': VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': VITE_RAPIDAPI_HOST
    } 
  };

  const { data, status } = await axios.get<ApiResult>(searchURL.toString(), requestOptions);
  if (status === 200) {
    const news = data.value.map((news: NewsWithImage) => ({ 
      id: news.id,
      title: news.title,
      body: news.body,
      url: news.url,
      ...normalizeImgData(news.image) 
    } as News))

    return {
      news,
      totalCount: data.totalCount
    }
  }
}