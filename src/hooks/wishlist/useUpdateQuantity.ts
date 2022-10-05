import { useDispatch } from "react-redux"
import { updateQuantity } from "../../redux/wishlist/actions"

const useUpdateQuantity = () => {
    const dispatchRedux = useDispatch()
    const dispatchUpdateQuantity = (data: object) => {
        dispatchRedux(updateQuantity(data))
    }

    return dispatchUpdateQuantity
}

export default useUpdateQuantity