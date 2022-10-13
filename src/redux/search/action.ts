import { GET_PRODUCT_BY_NAME } from "./constants";

export const searchProduct = (data: object) => ({
    type: GET_PRODUCT_BY_NAME,
    payload: data
})