import { KEY_LOCALSTORAGE, INIT_COUNTS } from './Constants';

export const getInitial = () => {
  const storedCounts = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  return storedCounts ? storedCounts : INIT_COUNTS;
};

export const saveToLocalStorage = obj => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(obj));
};
