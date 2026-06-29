import React from "react";
import * as Yup from "Yup";
import { useFormik } from "formik";

const Signup = () => {
  const signupSchema =Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("email is required"),

    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{8,}$/,
        "must be 8+ characters, with an uppercase letter and a number",
      )
      .required("password is required"),

    // confirmpassword: Yup.string()
    //   .oneOf([Yup.ref("password")], "password must match")
    //   .required("please confirm your password"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmpassword: "" },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("signing up:", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.email && formik.errors.email && (
        <p> {formik.errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
         {formik.touched.password && formik.errors.password && (
        <p> {formik.errors.password}</p>
      )}
      <button type="submit"></button>
    </form>
    
  );
};

export default Signup;
