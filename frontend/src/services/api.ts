import axios from 'axios';
export const api = axios.create({ baseURL: 'http://localhost:4000' });
import { watching, planToWatch, onHold, allAnime } from "../mock/animeData";

// Simulated API calls using Promise to mimic async requests

export const getWatchingAnime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(watching), 300); // Simulate network delay
  });
};

export const getPlanToWatchAnime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(planToWatch), 300);
  });
};

export const getOnHoldAnime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(onHold), 300);
  });
};

export const getAllAnime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(allAnime), 300);
  });
};
