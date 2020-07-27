import AxiosServices from './axiosServices';

class Service {

    history() {
        console.log(" get in axios service ");
        return AxiosServices.get();
    }
    
    optiontype(data){
        console.log(" Id in axios service ",data);
        return AxiosServices.post();
    }
}
export default Service;