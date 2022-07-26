import React from 'react'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ProductsForm() {
  let { id } = useParams()
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const [productList, setProductList] = useState([])

  async function fetchDataCustomer(urlCustomer) {
    try {
      let response = await axios.get(urlCustomer);
      let temp = await response.data;
      console.log(temp);
      if (id) {
        setValue("Name", temp?.name)
        setValue("color", temp?.color)
        setValue("price", temp?.price)
        setValue("description", temp?.description)
      }
      return temp;
    } catch (err) {
      console.log("Error: ", err.message);
      return {};
    }
  }
  useEffect(() => {
    console.log(id);
    if (id) {
      let urlCustomer =
        "https://62d7fd469088313935889072.mockapi.io/api/v1/Products/" + id;
      fetchDataCustomer(urlCustomer);
    }
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      //update
      console.log("update", data);
    } else {
      //create
      postData(data);
      console.log("create", data);
    }
  }
  const postData = (data) => {
    let dumpData = {
      name: data.name,
      color: data.color,
      price: data.price,
      description: data.description,
    };

    console.log(dumpData);
    fetch("https://62d7fd469088313935889072.mockapi.io/api/v1/Products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dumpData),
    })
      .then((response) => response.json())
      .then((json) => {
        setProductList(json)
        // Xử lý kết quả JSON ở đây
        console.log(json);
      })
  }
  const onClick = () => {
    alert("Tạo thành công. Chuyển đến List để xem")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <label>Name</label>
          <input {...register("Name", { required: true })} />
          {errors.Name?.type === 'required' && <p>Vui lòng điền tên</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <label>Color</label>
          <input {...register("color", { required: true })} />
          {errors.color && <p>Vui lòng điền color</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <label>Price</label>
          <input {...register("price", { required: true })} />
          {errors.price && <p>Vui lòng điền Price</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <label>Desciption</label>
          <input {...register("desciption", { required: true })} style={{width: 500}}/>
          {errors.description && <p>Vui lòng điền Description</p>}
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <input onClick={() => onClick()} type="submit" />
        </div>
      </form></>
  );
}
