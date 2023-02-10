import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const placeApi = axios.create({
    baseURL: "/api/web/place",
});

// placeApi.interceptors.request.use(interceptorRequest);
// placeApi.interceptors.response.reject(interceptorReponse);

export default placeApi;
