import { SET_DEFAULT_ADDRESS } from "./constants";

interface DefaultAddress {
    defaultAddress: {}
}

const initState: DefaultAddress = {
    defaultAddress: {
        id: 1,
        address: "abc",
        name: "Long",
        phone: "0123456789"
    }
}

const defaultAddressReducer = (state = initState, action: any) => {
    switch (action?.type) {
        case SET_DEFAULT_ADDRESS:
            return {...state, defaultAddress: action.payload}
        default:
            return state
    }
}

export default defaultAddressReducer