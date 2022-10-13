
import { GET_PRODUCT_BY_NAME } from "./constants";

interface searchState {
    keyword: object[]
}

const initState: searchState = {
    keyword: []
}

const searchReducer = (state = initState, action: any) => {
    console.log(state, action)

    switch (action?.type) {
        case GET_PRODUCT_BY_NAME:
            return { ...state, productName: action.payload }
        default:
            return state
    }
}

export default searchReducer