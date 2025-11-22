import React from 'react'
import { useForm } from 'react-hook-form'

const Registration_Form = () => {
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm();

    const onsubmit = (data)=> {
     console.log(data)
     reset();
    }
    const password = watch("password");
    const confirmPassword = watch('confirmPassword');
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 px-4-gray-500 min-h-screen py-6 px-6 mb-6">
            <div className="max-w-4xl mx-auto pt-4">
        <div className="max-w-md bg-white mx-auto shadow-md rounded-md p-5">
            <h1 className="text-gray-800 font-semibold text-3xl text-center mb-4 p-2">Registration Form</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onsubmit)}>
            <label className="text-md font-semibold">Full Name</label>
            <input className=
            "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" 
            type="text" placeholder="username"
            {...register("username", {required: "username is required"})} 
            />
            {
                errors.username && <p className="text-red-800">{errors.username.message}</p>
            }
            <label className="text-md font-semibold">Email</label>
            <input className=
            "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" 
            type="email" placeholder="Email" 
            {...register("email", {required: "email Is required", 
                pattern: {value:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email is invalid"}})}
            />
            {
                errors.email && <p className="text-red-800">{errors.email.message}</p>
            }
            <label className="text-md font-semibold">Password</label>
            <input className=
            "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" 
            type="password" placeholder="Password"
            {...register("password", {required: "password is required", 
            minLength: {
              value: 6, message: "The password must be at least six characteris"                
            }})} 
            />
            {
                errors.password && <p className="text-red-800">{errors.password.message}</p>
            }

            <label className="text-md font-semibold">Confirm Password</label>
            <input type="password" placeholder='confirm password'
            className=
            "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" 
            {...register('confirmPassword', {required: "confirm password is required", 
            validate:
            (value) => value === password || "password do not match"
            })}
            />
            {
                errors.confirmPassword && <p className='text-red-800'>{errors.confirmPassword.message}</p>
            }

            <div className='flex items-center gap-2'>
                <input type="checkbox" {...register("terms", {required: "you must accept the terms"})} />
                <label>i accept the terms condition</label>
            </div>
            {
                errors.terms && <p>{errors.terms.message}</p>
            }
            <button className=
            "px-3 py-2 w-full rounded-md cursor-pointer bg-rose-800 text-white text-center" 
            type="submit">
                Submit
            </button>
        </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default Registration_Form