import swal from 'sweetalert';
import axiosClient from './axiosClient';

const tinhtpApi = {
    getAll: async () => {
        try {
            return await axiosClient.post('/tinhtp')
        }catch(response) {
            swal("get false!", "get list tinhtp false. check again!", "error");
            console.log(response);
        }
    },

    update: async (params: any) => {
        try{
            swal("update success!", "update tinhtp success. check again!", "success");
            return await axiosClient.post('/tinhtp/update', params);
        }catch(response) {
            swal("update false!", "update tinhtp false. check again!", "error");
            console.log(response);
        }
    },

    create: async (params: any) => {
        try{
            swal("create success!", "create tinhtp success. check again!", "success");
            return await axiosClient.post('/tinhtp/create', {...params})
        }catch(response) {
            swal("create false!", "create tinhtp false. check again!", "error");
            console.log(response);
        }
    },

    delete: async (params: any) => {
        try{
            swal("delete success!", "delete tinhtp success. check again!", "success");
            return await axiosClient.post('/tinhtp/delete', {...params})
        } catch(response) {
            swal("delete false!", "delete tinhtp false. check again!", "error");
            console.log(response);
        }
    },

    search: async (params: any) => {
        try{
            return await axiosClient.post('/tinhtp/search', {...params})
        } catch(response) {
            swal("search false!", "search tinhtp false. check again!", "error");
            console.log(response);
        }
    }
}
  
export default tinhtpApi;