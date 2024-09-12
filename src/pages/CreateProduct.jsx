import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import axios from "axios"
// 1. create the form, get data from the form, submit the form, validate the form.
const CreateProduct = () => {
  let url = "http://localhost:5002/product/createproduct"
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post(url,values)
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    validationSchema: yup.object({
      productName: yup.string().required("It is required, fill it jhor"),
      productPrice: yup.number().required("It is required, fill it jhor"),
      description: yup.string().required("It is required, fill it jhor"),
      image: yup.string().required("It is required, fill it jhor"),
      // password: yup.string().pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$","Minimum eight characters, at least one letter, one number and one special character").min(6,"error message")
    }),
  });
  // console.log(formik);
  return (
    <>
      <h1>CreateProduct</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          onChange={formik.handleChange}
          name="productName"
          onBlur={formik.handleBlur}
          className={formik.touched.productName && formik.errors.productName ? "form-control my-2 w-100 is-invalid": "form-control my-2 w-100"}
        />
        <small className="text-danger">{formik.touched.productName && formik.errors.productName}</small>
        {/* <small>{formik.touched.productName ? formik.errors.productName : ""}</small> */}
        <input
          type="number"
          placeholder="Product Price"
          onChange={formik.handleChange}
          name="productPrice"
          onBlur={formik.handleBlur}
          className={formik.touched.productPrice && formik.errors.productPrice ? "form-control my-2 w-100 is-invalid": "form-control my-2 w-100"}
        />
        <small className="text-danger">{formik.touched.productPrice && formik.errors.productPrice}</small>
        <input
          type="text"
          placeholder="Description"
          onChange={formik.handleChange}
          name="description"
          onBlur={formik.handleBlur}
          className={formik.touched.description && formik.errors.description ? "form-control my-2 w-100 is-invalid": "form-control my-2 w-100"}
        />
        <small className="text-danger">{formik.touched.description && formik.errors.description}</small>
        <input
          type="text"
          placeholder="Image"
          onChange={formik.handleChange}
          name="image"
          onBlur={formik.handleBlur}
          className={formik.touched.image && formik.errors.image ? "form-control my-2 w-100 is-invalid": "form-control my-2 w-100"}
        />
        <small className="text-danger">{formik.touched.image && formik.errors.image}</small>
        <button type="submit">Save Product</button>
      </form>
    </>
  );
};

export default CreateProduct;
