const API_KEY = "51c1b0fe39c44803875ff880fe3d425e"

export const getApiURL = () => `https://newsapi.org/v2/everything?q=tesla&from=2022-07-21&sortBy=publishedAt&apiKey=${API_KEY}`
export const getSearchApiUrl = searchKey => `https://newsapi.org/v2/everything?q=${searchKey}&from=2022-07-21&sortBy=publishedAt&apiKey=${API_KEY}`