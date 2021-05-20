
import axiosClient from './axiosClient';

const userApi = {
    getAll: async () => {
        return await axiosClient.post('/user');
    },

    update: async () => {
        return await axiosClient.post('/user/create')
    },

    create: async () => {
        return await axiosClient.post('/user/create')
    },

    delete: async () => {
        return await axiosClient.post('/user/delete')
    }
}
  
export default userApi;