import axios from "axios";

const $host = axios.create({
  baseURL: window.location.href,
});

const $authHost = axios.create({
  baseURL: window.location.href,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`; //добавляем заголовок авторизации, берем его из локал стореджа
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
