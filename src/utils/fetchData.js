export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '4f357e93a4msh206d7977649c51fp172ff7jsnc472bcb08bc8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
// '4f357e93a4msh206d7977649c51fp172ff7jsnc472bcb08bc8'
