import swal from 'sweetalert';
import axiosClient from './axiosClient';

const productImageApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/product-image')
        }catch(response) {
            swal("get false!", "get list product-image false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update product-image success. check again!", "success");
            return await axiosClient.post('/product-image/update', params);
        }catch(response) {
            swal("update false!", "update product-image false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create product-image success. check again!", "success");
            return await axiosClient.post('/product-image/create', {...params})
        }catch(response) {
            swal("create false!", "create product-image false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete product-image success. check again!", "success");
            return await axiosClient.post('/product-image/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete product-image false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/product-image/search', {...params})
        } catch(response) {
            swal("search false!", "search product-image false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default productImageApi;