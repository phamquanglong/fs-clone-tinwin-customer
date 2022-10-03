import { useSelector } from "react-redux"
import { getWishlistState } from "../../redux/wishlist/selectors"
import useDeleteFromWishlist from "./useDeleteFromWishlist"

const useDeleteAllWishlist = () => {
    const wishlistSelector = useSelector(getWishlistState)
    const wishlist = wishlistSelector.wishlist
    const dispatchDeleteFromWishlist = useDeleteFromWishlist()

    const deleteAllWishlist = () => {
        wishlist.forEach((item: object) => dispatchDeleteFromWishlist(item))
    }

    return deleteAllWishlist
}

export default useDeleteAllWishlist