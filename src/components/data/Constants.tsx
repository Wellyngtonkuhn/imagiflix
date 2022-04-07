const URL = 'https://api.themoviedb.org/3'
const IMAGEURL = `https://image.tmdb.org/t/p`
const API_KEY = 'ec931f92aeb8aff2a4d90ead11355e6f'
const APISTRING =`?api_key=${API_KEY}&language=pt-BR`
const EVENTS = {
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose'
}

export default {
    URL,
    IMAGEURL,
    API_KEY,
    APISTRING,
    EVENTS
}