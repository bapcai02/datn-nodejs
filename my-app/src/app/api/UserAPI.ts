
import axiosClient from './axiosClient';

const userApi = {
    getAll: async () => {
        return await axiosClient.post('/user');
    }
}
  
export default userApi;