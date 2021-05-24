import swal from 'sweetalert';
import axiosClient from './axiosClient';

const userApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/user')
        }catch(response) {
            swal("get false!", "get list user false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update user success. check again!", "success");
            return await axiosClient.post('/user/update', params);
        }catch(response) {
            swal("update false!", "update user false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create user success. check again!", "success");
            return await axiosClient.post('/user/create', {...params})
        }catch(response) {
            swal("create false!", "create user false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete user success. check again!", "success");
            return await axiosClient.post('/user/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete user false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default userApi;