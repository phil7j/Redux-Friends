import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function Login({touched, errors}) {
    return (
        <div>
            <p>Login Page</p>
            <Form className="form">
      <div className="form-group">
        <label className="label">Username:</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className="btn">Submit &rarr;</button>
    </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues() {
      return {
        username: "",
        password: ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(6)
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    }),
    handleSubmit(values, formikBag) {
      const url =
        "http://localhost:5000/api/login";
      axios
        .post(url, values)
        .then( res => {
          localStorage.setItem("token", res.data.payload);
          formikBag.props.history.push("/Friends");
        console.log("Success!", res)
        console.log("Token Set:", localStorage.getItem('token'))
        })
        .catch(e => {
          console.log(e.response.data);
        });
    }
  })(Login);