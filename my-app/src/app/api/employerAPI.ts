import swal from 'sweetalert';
import axiosClient from './axiosClient';

const employerApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/employer')
        }catch(response) {
            swal("get false!", "get list employer false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update employer success. check again!", "success");
            return await axiosClient.post('/employer/update', params);
        }catch(response) {
            swal("update false!", "update employer false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create employer success. check again!", "success");
            return await axiosClient.post('/employer/create', {...params})
        }catch(response) {
            swal("create false!", "create employer false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete employer success. check again!", "success");
            return await axiosClient.post('/employer/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete employer false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/employer/search', {...params})
        } catch(response) {
            swal("search false!", "search employer false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default employerApi;