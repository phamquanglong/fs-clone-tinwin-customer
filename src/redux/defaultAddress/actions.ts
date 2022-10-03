import { SET_DEFAULT_ADDRESS } from "./constants";

const setDefaultAddress = (data: object) => ({
    type: SET_DEFAULT_ADDRESS,
    payload: data
})

export {setDefaultAddress}