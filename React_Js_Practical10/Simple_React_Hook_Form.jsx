import { useForm } from "react-hook-form";

const SimpleForm = ()=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm("");
    console.log(errors.username);
    function onsubmit(data) {
      console.log(data);
      reset();
    }
    return(
        <>
        <div className="min-h-screen bg-gray-50 py-10 px-4-gray-500 min-h-screen py-6 px-6 mb-6">
            <div className="max-w-4xl mx-auto pt-4">
        <div className="max-w-md bg-white mx-auto shadow-md rounded-md p-5">
            <h1 className="text-gray-800 font-semibold text-2xl text-center mb-4 p-2">React Hook Form</h1>
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
            {...register("email", {required: "email Is required"})}
            />
            {
                errors.email && <p className="text-red-800">{errors.email.message}</p>
            }
            <label className="text-md font-semibold">Password</label>
            <input className=
            "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" 
            type="password" placeholder="Password"
            {...register("password", {required: "password is required"})} 
            />
            {
                errors.password && <p className="text-red-800">{errors.password.message}</p>
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

export default SimpleForm;