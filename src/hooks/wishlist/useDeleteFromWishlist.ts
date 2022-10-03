import { useDispatch } from "react-redux"
import { deleteFromWishlist } from "../../redux/wishlist/actions"

const useDeleteFromWishlist = () => {
    const dispatchRedux = useDispatch()
    const dispatchDeleteFromWishlist = (data: object) => {
        dispatchRedux(deleteFromWishlist(data))
    }

    return dispatchDeleteFromWishlist
}

export default useDeleteFromWishlist