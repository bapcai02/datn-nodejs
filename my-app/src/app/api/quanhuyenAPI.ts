import swal from 'sweetalert';
import axiosClient from './axiosClient';

const quanhuyenApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/quanhuyen')
        }catch(response) {
            swal("get false!", "get list quanhuyen false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update quanhuyen success. check again!", "success");
            return await axiosClient.post('/quanhuyen/update', params);
        }catch(response) {
            swal("update false!", "update quanhuyen false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create quanhuyen success. check again!", "success");
            return await axiosClient.post('/quanhuyen/create', {...params})
        }catch(response) {
            swal("create false!", "create quanhuyen false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete quanhuyen success. check again!", "success");
            return await axiosClient.post('/quanhuyen/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete quanhuyen false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/quanhuyen/search', {...params})
        } catch(response) {
            swal("search false!", "search quanhuyen false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default quanhuyenApi;