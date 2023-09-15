import axios from 'axios'

export const server = axios.create({
    baseURL: 'http://localhost:3334',
    // baseURL: 'http://nlw-ia-foundations.vercel.app:3334',
})