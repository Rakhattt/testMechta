import apiAxios from "@/servicesLib/index";

export const getProducts = async (
  page: number,
  limit: number,
  orderParam: string
) => {
  return await apiAxios.get(
    `https://665801795c36170526468b7c.mockapi.io/api/v1/products?page=${page}&limit=${limit}${orderParam}`
  );
};
