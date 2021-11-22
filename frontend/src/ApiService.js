import axios from 'axios';
import Send from './Send';

const USER_API_BASE_URL = '/api/v1/users';
class ApiService {

    fetchUsers() {
        return Send({
            // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
            url: USER_API_BASE_URL,
            method: 'get'
        })
        // return axios.get(USER_API_BASE_URL);
    }

    addUser(user) {
        return Send({
            // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
            url: USER_API_BASE_URL,
            method: 'post',
            user: user
        })
        // return axios.post(USER_API_BASE_URL, user);
    }

    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }


}

export default new ApiService();