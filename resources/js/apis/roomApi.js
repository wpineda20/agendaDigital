import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const roomApi = axios.create({
    baseURL: "/api/web/room",
});

// roomApi.interceptors.request.use(interceptorRequest);
// roomApi.interceptors.response.reject(interceptorReponse);

export default roomApi;
