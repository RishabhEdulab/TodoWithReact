import { useState,useEffect } from "react";
import { StudentTypes } from "../types/StudentTypes";
import axios,{AxiosRequestConfig} from 'axios'


const AxiosGet = (url:string,accessToken?:string) => {
  const [data,setData]=useState<StudentTypes[]>([])
  const [error,setError]=useState<unknown>()

  const getData=async ()=>{
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
        const response=await axios.get(url,config)
        setData(response.data)
    } catch (error) {
        setError(error);
    }
  }
  useEffect(()=>{
    getData()
  },[url])

  return {data,error,getData}
}

export default AxiosGet
