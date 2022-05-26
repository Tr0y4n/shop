import { $host, $authHost } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  console.log("DATA IN fetchTypes ==== ", data)
  return data;
};

export const createBrand = async (brand) => {
    const { data } = await $authHost.post("api/brand", brand);
    console.log("DATA IN fetchBrand ==== ", data)
    return data;
  };
  
  export const fetchBrands = async () => {
    const { data } = await $host.get("api/brand");
    console.log("DATA IN fetchBrands ==== ", data)
    return data;
  };

  export const createDevice = async (device) => {
    const { data } = await $authHost.post("api/device", device);
    return data;
  };
  
  export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get("api/device", {params: {
      typeId, brandId, page, limit
    }});
    console.log("DATA IN fetchDevices ==== ", data)
    return data;
  };

  export const fetchOneDevice = async (id) => {
    const { data } = await $host.get("api/device/" + id);
    console.log("DATA IN fetchOneDevice ==== ", data)
    return data;
  };