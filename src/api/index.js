import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.shrtco.de/v2' });

export const createShortenLink = (link) => API.post(`/shorten?url=${link}`);