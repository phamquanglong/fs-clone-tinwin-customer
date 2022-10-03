import { useDispatch, useSelector } from "react-redux"
import { setDefaultAddress } from "../redux/defaultAddress/actions"
import { getDefaultAddressState } from "../redux/defaultAddress/selectors"

const useDefaultAddress = () => {
    const defaultAddressSelector = useSelector(getDefaultAddressState)
    const defaultAddress = defaultAddressSelector.defaultAddress
    const dispatchRedux = useDispatch()
    const dispatchDefaultAddress = (data: object) => {
        dispatchRedux(setDefaultAddress(data))
    }

    return {
        defaultAddress,
        dispatchDefaultAddress
    }
}

export default useDefaultAddress