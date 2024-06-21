import apiAxios from "@/servicesLib/index";

export const getProductsDetail = async (
    id: string
) => {
  return await apiAxios.get(
    `https://665801795c36170526468b7c.mockapi.io/api/v1/products/${id}`
  );
};
