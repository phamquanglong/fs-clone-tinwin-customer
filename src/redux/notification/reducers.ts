import { SHOW_NOTIFICATION } from "./constants";

interface NotificationState {
   notification: object
}

const initState: NotificationState = {
   notification: {
      // visible: false
   }
}

const notificationReducer = (state = initState, action: any) => {
   switch (action?.type) {
      case SHOW_NOTIFICATION:
         return {...state, notification: action.payload}
      default:
         return state
   }
}

export default notificationReducer