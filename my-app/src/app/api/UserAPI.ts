import swal from 'sweetalert';
import axiosClient from './axiosClient';

const userApi = {
    getAll: async () => {
        return await axiosClient.post('/user')
        .catch((response) => {
            console.log(response);
        })
    },

    update: async (params: any) => {
        return await axiosClient.post('/user/update', {params})
        .catch((response) => {
            console.log(response);
        })
    },

    create: async (params: any) => {
        return await axiosClient.post('/user/create', {params})
        .catch((response) => {
            // swal("create false!", "create user false. check again!", "false");
            console.log(response);
        })
    },

    delete: async (params: number) => {
        return await axiosClient.delete('/user/delete')
        .catch((response) => {
            console.log(response);
        })
    }
}
  
export default userApi;