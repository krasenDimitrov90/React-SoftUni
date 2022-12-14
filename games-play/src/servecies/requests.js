import * as api from './api.js';

import { saveUser } from "../Auth/auth";

const host = 'http://localhost:3030';
const gamesURL = '/data/games';
const resentGamesURL = '/data/games?sortBy=_createdOn%20desc&distinct=category';
const loginUrl = '/users/login';
const registerUrl = '/users/register';

export const getRecentGames = () => api.get(`${host}${resentGamesURL}`);

export const getAllGames = () => api.get(`${host}${gamesURL}?sortBy=_createdOn%20desc`);

export const getGame = (id) => api.get(`${host}${gamesURL}/${id}`);

export const createGame = (data) => api.post(`${host}${gamesURL}`, data);

export const login = (data) => api.post(`${host}${loginUrl}`, data);

export const editGame = (data, id) => api.put(`${host}${gamesURL}/${id}`, data);


