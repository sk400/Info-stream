const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const fetchNews = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/news?safeSearch=Strict&textFormat=Raw`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
        next: { revalidate: 86400 },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedNews = async (searchTerm) => {
  try {
    const response = await fetch(
      `${baseUrl}/news/search?q=${searchTerm}&count=20&freshness=Day&textFormat=Raw&safeSearch=Strict`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
        next: { revalidate: 86400 },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
