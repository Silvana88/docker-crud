// src/routes.js
const BASE_URL = "https://df5e-2800-810-5ea-9f00-98e-e2cc-b9ad-56f6.ngrok-free.app";  //copiar la URL de backend

export const API_ROUTES = {
    GET_ALL_USERS: `${BASE_URL}/users/all`,
    CREATE_USER: `${BASE_URL}/users/create`,
    FIND_USER: (dni) => `${BASE_URL}/users/find/${dni}`,
    UPDATE_USER: (dni) => `${BASE_URL}/users/update/${dni}`,
    DELETE_USER: (dni) => `${BASE_URL}/users/delete/${dni}`,
};
