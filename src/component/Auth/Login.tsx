import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegistrationType } from "../../types/RegisterTypes";
import { LoginTypes } from "../../types/LoginTypes";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import axios from "axios";
interface loginPageProps{
  isAuthenticated:boolean
  setIsAuthenticated:(isAuthenticated:boolean) => void
}
const Login = ({isAuthenticated,setIsAuthenticated}:loginPageProps) => {
  const history = useHistory();
  useEffect(()=>{
    localStorage.removeItem('token');
  },)
  const formIk = useFormik<LoginTypes>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if(!process.env.REACT_APP_Emp_URL){
        throw new Error("process.env.REACT_APP_Emp_URL is undefined")
      }
      const loginResponse = await axios.post(
        `${process.env.REACT_APP_Emp_URL}user/Login`,
        values
      );
      console.log("loginResponse", loginResponse);
      if (loginResponse.status === 401) {
        return alert("Invalid login");
      }
      // console.log("loginsjs",loginResponse.data.auth);
      if (
        loginResponse.data.httpstatus === 200 &&
        loginResponse.data.message === "Login"
      ) {
        localStorage.setItem("token", loginResponse.data.auth);
        setIsAuthenticated(true);
        alert("Login successful");
        console.log("isAuthenticated",isAuthenticated);
        //redirec to use student page
        history.push("/Student");
      }
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email Is Required")
        .email("Please Enter a Valid Email"),
      password: Yup.string().required("Password Is Required"),
    }),
  });

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="block max-w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700">
        <p className="text-center mb-10 text-3xl">Login</p>
        <form onSubmit={formIk.handleSubmit}>
          <div className="grid grid-cols-1 w-full  gap-10">
            {/* email */}
            <div className="relative h-11 w-full min-w-[300px]">
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
                <div className="text-sm text-red-600">
                  {formIk.errors.email}
                </div>
              ) : null}
            </div>
            {/* password */}
            <div className="relative h-11 w-full min-w-[300px]">
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
                <div className="text-sm text-red-600">
                  {formIk.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center mt-10">
            <button
              className="middle none center mr-3 rounded-lg bg-blue-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              SignIn
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <p>
            Do Not Have Account?
            <Link to="/" className="text-blue-700">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
