import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../redux/notification/actions"
import { getShowNotificationState } from "../redux/notification/selectors"

const useShowNotification = () => {
   const showNotificationSelector = useSelector(getShowNotificationState)
   const notification = showNotificationSelector.notification
   const dispatchRedux = useDispatch()
   const dispatchShowNotification = (data: object) => {
      dispatchRedux(showNotification(data))
   }
   return {
      notification,
      dispatchShowNotification
   }
}

export default useShowNotification