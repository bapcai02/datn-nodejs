import swal from 'sweetalert';
import axiosClient from './axiosClient';

const categoryApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/category')
        }catch(response) {
            swal("get false!", "get list category false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update category success. check again!", "success");
            return await axiosClient.post('/category/update', params);
        }catch(response) {
            swal("update false!", "update category false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create category success. check again!", "success");
            return await axiosClient.post('/category/create', {...params})
        }catch(response) {
            swal("create false!", "create category false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete category success. check again!", "success");
            return await axiosClient.post('/category/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete category false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/category/search', {...params})
        } catch(response) {
            swal("search false!", "search category false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default categoryApi;