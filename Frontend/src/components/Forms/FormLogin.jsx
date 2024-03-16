import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-4xl mb-4 text-center">Login</h2>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="py-[12px] px-[20px] w-80 rounded-3xl text-black"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="py-[12px] px-[20px] w-80 rounded-3xl text-black"
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex justify-between">
        <a href="#" className="text-white hover:underline">
          Forget Password
        </a>
        <Link to="/register" className="text-white hover:underline">
          Signup
        </Link>
      </div>
      <Button
        type="submit"
        text="Sign In"
        className="bg-mainColor rounded-3xl text-color font-bold py-2 px-5 mt-3"
        iconName="ri-login-box-fill"
      />
      <Button
        text="Sign In with GitHub"
        className="bg-mainColor rounded-3xl text-color font-bold py-2 px-5"
        iconName="ri-github-fill"
      />
    </form>
  );
};

export default FormLogin;
