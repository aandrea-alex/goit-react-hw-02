import { KEY_LOCALSTORAGE, INIT_COUNTS } from './Constants';

export const getInitial = () => {
  const storedReviews = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  return storedReviews ? storedReviews : INIT_COUNTS;
};

export const saveToLocalStorage = obj => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(obj));
};
