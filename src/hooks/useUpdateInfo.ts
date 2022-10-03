import { useDispatch, useSelector } from "react-redux"
import { updateInfo } from "../redux/user/actions"
import { getUserState } from "../redux/user/selectors"

const useUpdateInfo = () => {
    const userInfo = useSelector(getUserState)
    const dispatchRedux = useDispatch()
    const dispatchUpdateInfo = (data: object) => {
        dispatchRedux(updateInfo(data))
    }

    return {
        userInfo,
        dispatchUpdateInfo
    }
}

export default useUpdateInfo