import axios from 'axios';

const apiUrl = 'http://beta.Measurment.com/api/measurement';

class AxiosService {

    get () {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }
    
    post(data){
        console.log(" Id in axios service ",data);
    return   axios.post(apiUrl,data);
    }
}
export default AxiosService;
