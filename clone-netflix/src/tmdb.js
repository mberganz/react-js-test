/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "4eb3572597f7e32923eb8542bff1c5c2";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trendings",
        title: "Recomendados pra você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Filmes de Ação",
        items: await basicFetch(
          `/discover/movies?with_genre=28language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Filmes de Comédia",
        items: await basicFetch(
          `/discover/movies?with_genre=35language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Filmes de Terror",
        items: await basicFetch(
          `/discover/movies?with_genre=27language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Filmes de Romance",
        items: await basicFetch(
          `/discover/movies?with_genre=10749language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movies?with_genre=99language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      // eslint-disable-next-line default-case
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
  },
};
