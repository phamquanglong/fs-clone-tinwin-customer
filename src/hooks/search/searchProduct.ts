import { useEffect, useState } from "react";
import searchService from "../../services/SearchService";
import { useDispatch, useSelector } from "react-redux"
import { getSearchState } from "../../redux/search/selector";
import { searchProduct } from "../../redux/search/action";

export const useSearchProduct = (keyword: string) => {
    const [res, setRes] = useState([])

    const params = {
        'keyword': keyword
    }
    useEffect(() => {
        searchService.getProductByKeyword(params).then(res => {
            keyword ? setRes(res.data) : setRes([])
            console.log("list", res.data)

        }).catch(err => console.log('error: ', err.response.data))
    }, [keyword])

    return res
}