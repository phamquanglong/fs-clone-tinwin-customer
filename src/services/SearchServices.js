import { get } from './AxiosHelper';
import axios from 'axios';

const SearchService = {
    getProductByKeyword(params) {
        return get('/sales/api/app/product/names-by-keyword', params)
    },

}

export default SearchService;