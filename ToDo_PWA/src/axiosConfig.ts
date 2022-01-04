import axios, { AxiosResponse } from "axios";

const interceptorResponse = (response: AxiosResponse<any>) => {
    if (response.data) {
        if (response.data.status) {
            if (response.data.status === 200 || response.data.status === 201) {
                return response;
            }
            return Promise.reject(response);
        } else {
            return response;
        }
    }

    return Promise.reject(response);
}

const interceptorError = (error: any) => {
    return Promise.reject(error);
}

export const configAxios = () => {
    axios.defaults.baseURL = "http://localhost:7073";

    axios.interceptors.response.use(function (response) {
        if (response.data) {
            if (response.data.status == 200 || response.data.status === 201) {
                return response;
            }
            return Promise.reject(response);
        }

        return Promise.reject(response);
    }, function (error) {
        return Promise.reject(error);
    });
}


