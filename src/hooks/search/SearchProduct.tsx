import React from "react"
import { useState, useEffect } from "react"
import SearchService from "../../services/SearchServices"

export const getListProductByKeyword = (keyword: string) => {
    const [res, setRes] = useState({})
    const params = {
        'keyword': keyword,
    }
    useEffect(() => {
        SearchService.getProductByKeyword(params).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}