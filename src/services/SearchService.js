import axios from "axios";
import { get } from "./AxiosHelper";

const searchService = {
    getProductByKeyword(params) {
        return get('/sales/api/app/product/names-by-keyword', params)
    }
}

export default searchService