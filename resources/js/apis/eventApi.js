import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const eventApi = axios.create({
    baseURL: "/api/web/event",
});

// eventApi.interceptors.request.use(interceptorRequest);
// eventApi.interceptors.response.reject(interceptorReponse);

export default eventApi;
