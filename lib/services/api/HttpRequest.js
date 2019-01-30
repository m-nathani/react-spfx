"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axiosInstance = axios_1.default.create({
    baseURL: 'www.abc.com/api'
});
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
        this.axios = axiosInstance;
    }
    HttpRequest.prototype.setHeader = function (header) {
        this.axios.defaults.headers.common[header.key] = header.value;
        this.axios.defaults.headers.post['Content-Type'] =
            'application/x-www-form-urlencoded';
    };
    HttpRequest.prototype.fetch = function (methodName, config) {
        var data = config.data;
        return this.axios.get(methodName, {
            params: data
        });
    };
    HttpRequest.prototype.create = function (methodName, config) {
        var data = config.data;
        return this.axios.post(methodName, data);
    };
    HttpRequest.prototype.update = function (methodName, config) {
        var data = config.data;
        return this.axios.put(methodName, data);
    };
    HttpRequest.prototype.patch = function (methodName, config) {
        var data = config.data;
        return this.axios.patch(methodName, data);
    };
    HttpRequest.prototype.delete = function (methodName, config) {
        var data = config.data;
        return this.axios.delete(methodName, { params: { id: data } });
    };
    HttpRequest.prototype.request = function (type, url, config) {
        var data = config.data;
        var promise;
        switch (type) {
            case 'GET':
                promise = axios_1.default.get(url, { params: data });
                break;
            case 'POST':
                promise = axios_1.default.post(url, data);
                break;
            case 'PUT':
                promise = axios_1.default.put(url, data);
                break;
            case 'PATCH':
                promise = axios_1.default.patch(url, data);
                break;
            case 'DELETE':
                promise = axios_1.default.delete(url, data);
                break;
            default:
                promise = axios_1.default.get(url, { params: data });
                break;
        }
        return promise;
    };
    return HttpRequest;
}());
exports.default = HttpRequest;
//# sourceMappingURL=HttpRequest.js.map
