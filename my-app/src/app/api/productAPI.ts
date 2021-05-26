import swal from 'sweetalert';
import axiosClient from './axiosClient';

const productApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/product')
        }catch(response) {
            swal("get false!", "get list product false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update product success. check again!", "success");
            return await axiosClient.post('/product/update', params);
        }catch(response) {
            swal("update false!", "update product false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create product success. check again!", "success");
            return await axiosClient.post('/product/create', {...params})
        }catch(response) {
            swal("create false!", "create product false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete product success. check again!", "success");
            return await axiosClient.post('/product/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete product false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/product/search', {...params})
        } catch(response) {
            swal("search false!", "search product false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default productApi;