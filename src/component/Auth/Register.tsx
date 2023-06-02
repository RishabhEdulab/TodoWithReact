import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { RegistrationType } from "../../types/RegisterTypes";
import { Link, useHistory} from "react-router-dom";
import axios from 'axios'
// import dotenv from 'dotenv'

const Register = () => {
  // dotenv.config()
  const hister=useHistory()
  console.log(process.env.REACT_APP_WEBSITE_NAME);
  
  const formIk=useFormik<RegistrationType>({
    initialValues:{
      name:"",
      email:"",
      password:"",
      age:null,
      city:"",
      gender:"",
      address:""
    },
    onSubmit:async (values)=>{
      if(!process.env.REACT_APP_Emp_URL){
       return console.log("process.env.REACT_APP_Emp_URL is undefined")
      }
      const registerResponse=await axios.post(`${process.env.REACT_APP_Emp_URL}user/register`,values)
      console.log("registerResponse",registerResponse)
      if(registerResponse.data.status!==201 && registerResponse.data.message!=="inserted"){
        alert("something went wrong")
      }
      alert("Thank you for registering!")
      hister.push("/Login")

      
      
    },
    validationSchema:Yup.object({
      name:Yup.string().required("Name Is Required").max(15, 'Must be 15 characters or less'),
      email:Yup.string().required("Email Is Required").email("Please Enter a Valid Email"),
      password:Yup.string().required("Password Is Required").min(8, 'Must be 8 characters'),
      age:Yup.number().required("Age Is Required"),
      city:Yup.string().required("City Is Required").max(15, 'Must be 15 characters or less'),
      gender:Yup.string().required("Gender Is Required"),
      address:Yup.string().required("Address Is Required"),
    })
  })

  
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="block max-w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700">
        <form onSubmit={formIk.handleSubmit}>
          <div className="grid grid-cols-2 w-full  gap-10">
            {/* name */}
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="name"
                value={formIk.values.name}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
              {formIk.touched.name && formIk.errors.name ? (
         <div className="text-sm text-red-600">{formIk.errors.name}</div>
       ) : null}
            </div>
            {/* email */}
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="email"
                value={formIk.values.email}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
              {formIk.touched.email && formIk.errors.email ? (
         <div className="text-sm text-red-600">{formIk.errors.email}</div>
       ) : null}
            </div>
            {/* password */}
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="password"
                value={formIk.values.password}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
              {formIk.touched.password && formIk.errors.password ? (
         <div className="text-sm text-red-600">{formIk.errors.password}</div>
       ) : null}
            </div>
            {/* age */}
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="age"
                value={formIk.values.age || ""}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Age
              </label>
              {formIk.touched.age && formIk.errors.age ? (
         <div className="text-sm text-red-600">{formIk.errors.age}</div>
       ) : null}
            </div>
            {/* city */}
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="city"
                value={formIk.values.city}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                City
              </label>
              {formIk.touched.city && formIk.errors.city ? (
         <div className="text-sm text-red-600">{formIk.errors.city}</div>
       ) : null}
            </div>
            {/* gender */}
            <div className=" h-11 w-full min-w-[230px]">
                <select name="gender"  value={formIk.values.gender} onBlur={formIk.handleBlur}  onChange={formIk.handleChange} className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option>Please Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                {formIk.touched.gender && formIk.errors.gender ? (
         <div className="text-sm text-red-600">{formIk.errors.gender}</div>
       ) : null}
              {/* <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Please Select Gender
              </label> */}
            </div>
            {/* address */}
            <div className="relative h-11 w-full min-w-[230px]">
                <input
                  className="peer h-full w-[200%] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="address"
                  value={formIk.values.address}
                  onChange={formIk.handleChange}
                  onBlur={formIk.handleBlur}
                />
              
               
             
            
               
            
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
               Address
              </label>
              {formIk.touched.address && formIk.errors.address ? (
         <div className="text-sm text-red-600">{formIk.errors.address}</div>
       ) : null}
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center mt-10">
            <button
              className="middle none center mr-3 rounded-lg bg-blue-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              SignUp
            </button>
          </div>

        </form>
        <div className="flex justify-center mt-4">
         <p>Already Account?<Link to="/Login" className="text-blue-700">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
