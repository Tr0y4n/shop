import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "USER",
  });
  console.log("DATA = ", data);
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
    role: "ADMIN",
  });
  console.log("DATA = ", data);

  localStorage.setItem("token", data.token);
  //console.log("localStorage = ", localStorage);
  //console.log("JWT_DECODE = ", jwt_decode(data.token));
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
