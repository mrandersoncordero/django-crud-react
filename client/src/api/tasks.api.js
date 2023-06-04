import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks'
})
export const getAllTakes = () => {
    return API.get('/');
}

export const getTask = (id) => API.get(`/${id}/`)

export const createTask = (task) => {
    return API.post('/', task)
}

export const deleteTask = (id) => API.delete(`/${id}`)

export const updateTask = (id, task) => API.put(`/${id}/`, task)