import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  let { id } = useParams();
  const [customerList, setcustomerList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  let url = "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id;
  async function fetchList(id) {
    try {
      let res = await axios.get(url);
      let temp = await res.data;
      setcustomerList(temp);
      if (id) {
        setValue("name", temp.name);
        setValue("address", temp.address);
        setValue("phone", temp.phone);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchList(url);
  }, []);

  //Tao 1 data moi
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      putData(data);
      console.log("cap nhat" + data);
    } else {
      postData(data);
      console.log("tao" + data);
    }
  };

  const postData = (data) => {
    let Data = {
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      email: data.email,
      DOB: "28/08/1997",
      address: data.address,
      postcode: "550000",
    };
    axios
      .post("https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/", Data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  const putData = (data) => {
    let Data = {
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      email: data.email,
      DOB: "28/08/1997",
      address: data.address,
      postcode: "550000",
    };
    axios
      .put("https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id, Data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form
      style={{ backgroundColor: "#282828", padding: "50px" }}
      className="col-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row mb-5">
        <div className="form-group col-6">
          <label style={{ color: "white" }}>Name</label>
          <input
            {...register("name", { required: true })}
            className="form-control"
            placeholder="Your name is..."
          />
          {errors.name && (
            <p style={{ color: "red" }}>Please fill your name!</p>
          )}
        </div>

        <div className="form-group col-4">
          <label style={{ color: "white" }}>Phone</label>
          <input
            type="number"
            {...register("phone", { required: true })}
            className="form-control"
            placeholder="Phone number..."
          />
          {errors.phone && (
            <p style={{ color: "red" }}>Please fill your phone number!</p>
          )}
        </div>
        <div className="form-group col-2">
          <label style={{ color: "white" }}>gender</label>
          <select
            defaultValue={""}
            {...register("gender", { required: true })}
            className="form-control"
          >
            <option value={""}>Choose...</option>
            <option value={1}>Man</option>
            <option value={2}>Woman</option>
            <option value={3}>Another</option>
          </select>
          {errors.gender && (
            <p style={{ color: "red" }}>Please choose your gender!</p>
          )}
        </div>
      </div>

      <div className="row mb-5">
        <div className="form-group col-6">
          <label style={{ color: "white" }}>Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
            })}
            className="form-control"
            placeholder="Your email is..."
          />
          {errors.email && (
            <p style={{ color: "red" }}>Something wrong here!</p>
          )}
        </div>

        <div className="form-group col-6">
          <label style={{ color: "white" }}>DOB</label>
          <input
            type="date"
            {...register("DOB", { required: true })}
            className="form-control"
          />
          {errors.DOB && <p style={{ color: "red" }}>Please fill your DOB!</p>}
        </div>
      </div>

      <div className="row mb-5">
        <div className="form-group col-6">
          <label style={{ color: "white" }}>Address</label>
          <input
            {...register("address", { required: true })}
            className="form-control"
            placeholder="Address..."
          />
          {errors.address && (
            <p style={{ color: "red" }}>Please fill your address!</p>
          )}
        </div>

        <div className="form-group col-6">
          <label style={{ color: "white" }}>POSTCODE</label>
          <input
            type="number"
            {...register("postcode", { required: true })}
            className="form-control"
            placeholder="ZIP..."
          />
          {errors.postcode && (
            <p style={{ color: "red" }}>Please fill your postcode!</p>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
