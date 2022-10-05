import {get} from './AxiosHelper';

const CategoriesServices = {
  getCategories(params) {
    return get('/sales/api/app/category', params);
  },
};

export default CategoriesServices;
