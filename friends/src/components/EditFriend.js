import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../axiosAuth';

function EditFriend(props) {
    return (
        <div>
                 <Form className="form">
      <div className="form-group">
        <label className="label">Name:</label>
        <Field
          className="input"
          name="name"
          type="text"
          autoComplete="off"
        />
        {/* <p>{touched.name && errors.name}</p> */}
      </div>
      <div className="form-group">
        <label className="label">Age:</label>
        <Field
          className="input"
          name="age"
          type="text"
          autoComplete="off"
        />
      </div>
      {/* <p>{touched.age && errors.age}</p> */}
      <div className="form-group">
        <label className="label">Email:</label>
        <Field
          className="input"
          name="email"
          type="email"
          autoComplete="off"
        />
      </div>
      {/* <p>{touched.email && errors.email}</p> */}
      <button className="btn">Submit &rarr;</button>
    </Form>
        </div>
    )
}
export default withFormik({
    mapPropsToValues() {
      return {
        name: "",
        age: "",
        email: ""
      };
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required(),
      age: Yup.string()
        .required(),
      email: Yup.string()
        .email()
        .required(),
    }),
    handleSubmit(values, formikBag) {
      const url =
        "http://localhost:5000/api/friends";
      axiosWithAuth()
        .post(url, values)
        .then( res => {
          formikBag.props.history.push("/Friends");
        console.log("Success!", res)
        })
        .catch(e => {
          console.log(e.response.data);
        });
    }
  })(EditFriend);
