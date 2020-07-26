import axios from 'axios';

const apiUrl = 'https://localhost:44313/api/measurement';

class Service {

    history() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }

    optiontype(data){
        console.log(" Id in axios service ",data);
    return   axios.post(apiUrl,data);
    }
}
export default Service;