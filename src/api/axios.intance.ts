import axios from 'axios';
import * as process from 'process';

const baseURL = process.env.REACT_APP_TRIVIA_QUIZ_API;

export const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});
