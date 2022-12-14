export const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const serializedUser = () => localStorage.getItem('user');

export const getUserId = () => JSON.parse(serializedUser())?._id;

export const getUserToken = () => JSON.parse(serializedUser())?.accessToken;

export const clearStorage = () => localStorage.clear();