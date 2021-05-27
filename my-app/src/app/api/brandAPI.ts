import swal from 'sweetalert';
import axiosClient from './axiosClient';

const brandApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/brand')
        }catch(response) {
            swal("get false!", "get list brand false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update brand success. check again!", "success");
            return await axiosClient.post('/brand/update', params);
        }catch(response) {
            swal("update false!", "update brand false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create brand success. check again!", "success");
            return await axiosClient.post('/brand/create', {...params})
        }catch(response) {
            swal("create false!", "create brand false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete brand success. check again!", "success");
            return await axiosClient.post('/brand/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete brand false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/brand/search', {...params})
        } catch(response) {
            swal("search false!", "search brand false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default brandApi;