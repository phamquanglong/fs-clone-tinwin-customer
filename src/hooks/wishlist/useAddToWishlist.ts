import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { addToWishlist } from "../../redux/wishlist/actions"
import { getWishlistState } from "../../redux/wishlist/selectors"
import useShowNotification from "../useShowNotification"

const useAddToWishlist = () => {
    const wishlistSelector = useSelector(getWishlistState)
    const wishlist = wishlistSelector.wishlist
  const {dispatchShowNotification, notification} = useShowNotification();

    const dispatchRedux = useDispatch()
    const dispatchAddToWishlist = (data: object) => {
        if (wishlist.filter(item => item.id === data.id)[0] !== undefined)
            {
                dispatchShowNotification({
                    icon: faXmarkCircle,
                    text: 'Sản phẩm đã có trong giỏ hàng',
                    visible: true,
                  });
                  setTimeout(
                    () =>
                      dispatchShowNotification({
                        visible: false,
                      }),
                    1000,
                  );
            }
        else {
            dispatchRedux(addToWishlist(data))
            dispatchShowNotification({
                icon: faCheckCircle,
                text: 'Đã thêm vào giỏ',
                visible: true,
              });
              setTimeout(
                () =>
                  dispatchShowNotification({
                    visible: false,
                  }),
                1000,
              );
        }
    }

    return dispatchAddToWishlist
}

export default useAddToWishlist