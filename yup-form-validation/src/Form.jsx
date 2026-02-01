import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "./schema";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <input type="text" {...register("name")} placeholder="Entre name" />
        <br />
        <br />
        <p className="error">{errors.name?.message}</p>
        {/* email  */}
        <input type="email" {...register("email")} placeholder="Enter Email" />
        <br />
        <br />
        <p className="error">{errors.email?.message}</p>
        {/* password */}
        <input
          type="password"
          {...register("password")}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <p className="error">{errors.password?.message}</p>
        {/* confirmPassword  */}
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm password"
        />
        <br />
        <br />
        <p className="error">{errors.confirmPassword?.message}</p>
        <input type="number" {...register("age")} />
        <br />
        <br />
        <p className="error">{errors.age?.message}</p>
        <label>Skills:</label>
        <input type="checkbox" value="React" {...register("skills")} /> React
        <input type="checkbox" value="NodeJs" {...register("skills")} /> Node Js
        <input type="checkbox" value="Html" {...register("skills")} /> Html
        <p className="error">{errors.skills?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
