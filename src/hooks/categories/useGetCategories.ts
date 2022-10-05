import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesServices from "../../services/CategoriesServices"

const useGetCategories = () => {
    const [res, setRes] = useState()

    const options = {
        method: 'POST',
        url: 'https://45.76.152.56/webbff/auth/api/account/login',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
          // Authorization: 'Bearer ' + token,
        },
        data: {
          "userNameOrEmailAddress": "0332727355",
          "password": "12345678Aa@",
          "rememberMe": true
        }
      };
    
      // useEffect(() => {
        
      //   fn();
      // }, []);
      const fn = async () => {
        await axios.request(options).then(res => console.log(res)).catch(err => console.log(err))
        // await axios
        //   .request(options)
        //   .then(res => {
        //       // setRes(res)
        //       console.log(res)
        //   })
        //   .catch(err => console.log(err));
      };

      return fn

    // return CategoriesServices.getCategories().then(res => console.log(res)).catch(err => console.log(err.response.data))
}

export default useGetCategories