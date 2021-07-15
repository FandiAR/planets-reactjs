import axios from 'axios';

const apiClient = (method, body, params = {}) => {
    const url = 'https://swapi.dev/api/planets';
    const headers = { 'Content-Type': 'application/json' };

    switch (method) {
        case 'get':
            return axios.get(url, { headers, params }).catch((error) => {
                throw error;
            });
        default:
    }
};
export default apiClient;
