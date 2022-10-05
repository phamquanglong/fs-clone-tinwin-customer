import { SHOW_NOTIFICATION } from "./constants";

const showNotification = (data: object) => ({
   type: SHOW_NOTIFICATION,
   payload: data
})

export {showNotification}