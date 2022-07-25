import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Api() {
  const [city, setCity] = useState([])

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data, e) => { console.log(data); e.preventDefault() }

  let url = "https://provinces.open-api.vn/api/?depth=3";
  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCity(temp);
    } catch (err) { }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const cityWatch = watch("city")
  const districtWatch = watch("district")


  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "auto" }}>
      <div>
        <input placeholder="Email" {...register("email", { required: true, maxLength: 50 })} />
        <input placeholder="Password" {...register("password", { minLength: 8 })} />

      </div>
      <div>
        <input placeholder="Vietnamese" {...register("Address", { maxLength: 50 })} />
        <input placeholder="Again" {...register("Address", { maxLength: 50 })} />
      </div>
      <div>

        {/* Handle City   */}
        <label>City</label>
        <select {...register("city", { required: true })}>
          <option value="">city/​​province</option>
          {city.map((index) => {
            return <option key={index.code}>{index.name}</option>
          })}
        </select>

        {/* Handle  District */}
        <label> District</label>
        <select {...register("district", { required: true })}>
          <option value="">Choose...</option>
          {city.map((index) => {
            return index.name === cityWatch
              ? index.districts.map((district) => {
                return <option key={district.code}>{district.name}</option>
              })
              : null;
          })}
        </select>

        <label>Commune</label>
        <select {...register("commune", { required: true })}>
          
        </select>


        {/* <select {...register("Address")}>
          <option value="">Address1</option>
          <option value="">Address2</option>
          <option value="">Other</option>
        </select>

        <select {...register("Address")}>
          <option value="">Address1</option>
          <option value="">Address2</option>
          <option value="">Other</option>
        </select>

        <select {...register("Address")}>
          <option value="">Address1</option>
          <option value="">Address2</option>
          <option value="">Other</option> */}
        {/* </select> */}
      </div>

      <input type="submit" />
    </form>
  );
}