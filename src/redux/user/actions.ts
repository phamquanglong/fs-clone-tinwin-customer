import { UPDATE_INFO_USER } from "./constants";

const updateInfo = (data: object) => ({
    type: UPDATE_INFO_USER,
    payload: data
})

export {updateInfo}