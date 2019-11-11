import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "035951e5083c3131ec5915d0f5c79d94",
        language: "en-US"
    }
})


export const moviesApi = {
    nowPlaying: () => api.get("/movie/now_playing"),
    upcoming: () => api.get("/movie/upcoming"),
    popular: () => api.get("/movie/popular"),
    moveDetail: (id) => api.get(`move/$(id)`, {
        params:{
            params: {
                append_to_response : "videos"
            }
        }
    }),
    search: term => 
    api.get("search/movie", {
        query: encodeURIComponent(term)
    })


}

export const  TvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airingtoday"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params:{
            params: {
                append_to_response : "videos"
            }
        }
    }),
    search: term =>
        api.get("search/tv", {
            query: encodeURIComponent(term)
        })
}