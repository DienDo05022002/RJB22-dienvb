import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react";
import axios from "axios";

const ERROR_EMAIL = {
    required: "Email Address is required",
    pattern: "Please include an '@' in the email address ",
};

export default function CustomersForm() {
    let { id } = useParams();
    const { register, handleSubmit,setValue } = useForm();


    const [customerForm, setCustomerForm] = useState([])
    // const onSubmit = data => console.log(data);
    const onClick = () => {
        alert("Tạo thành công. Chuyển đến List để xem")
    }
    async function fetchDataCustomer(urlCustomer) {
        try {
          let response = await axios.get(urlCustomer);
          let temp = await response.data;
          if (id) {
            setValue("email", temp?.email);
            setValue("address1", temp?.address);
            setValue("address2", temp?.address2);
            setValue("city", temp?.city);
            setValue("district", temp?.district);
            setValue("commune", temp?.commune);
          }
          return temp;
        } catch (err) {
          console.log("Error: ", err.message);
          return {};
        }
      }
    
      useEffect(() => {
        if (id) {
          let urlCustomer =
            "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id;
          let temp = fetchDataCustomer(urlCustomer);
          temp.then(function (response) {
            console.log(response)
            return response;
            
          });
        } }, []);

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
    };

    const postData = (data) => {
        let dumpData = {
            name: data.name,
            postCode: "55000",
            address: data?.address,
            dob: "05/03/1997",
            email: data.mail,
            gender: data.gender,
            phone: data.phone,
        };

        fetch("https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dumpData),
        })
            .then((response) => response.json())
            .then((json) => {
                setCustomerForm(json)
                // Xử lý kết quả JSON ở đây
                console.log(json);
            })

    }


    return (
        <div>
            <form
                className="row g-3 mx-auto mt-3 w-50"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="col-12" style={{ display: "flex" }}>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Name
                    </label>
                    <input
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                        ref={() => register({ name: "name" })}
                        {...register("name", {
                            required: true
                        })}
                    />
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        postCode
                    </label>
                    <input
                        className="form-control"
                        id="postCode"
                        placeholder="postCode"
                        type="number" {...register("postCode")}
                    />
                </div>
                <div style={{ display: "flex", marginTop: 15, marginBottom: 15 }}>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Address
                    </label>
                    <input
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                        ref={() => register({ name: "name" })}
                        {...register("name", {
                            required: true
                        })}
                    />
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        dod
                    </label>
                    <input
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                        ref={() => register({ name: "name" })}
                        {...register("name", {
                            required: true
                        })}
                    />
                </div>

                <div style={{ display: "flex" }}>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Email
                    </label>
                    <input style={{ width: 400 }}
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        ref={() => register({ name: "email" })}
                        {...register("email", {
                            required: ERROR_EMAIL?.required,
                            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                        })}
                    />
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Gender
                    </label>
                    <select {...register("gender")}>
                        <option value="female">true</option>
                        <option value="male">fale</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Phone
                    </label>
                    <input style={{ width: 400 }}
                        placeholder="Phone"
                        type="number" {...register("Phone")}
                    />

                </div>

                <div className="col-12">
                    <div className="form-check text-start mx-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <button onClick={() => onClick()} type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}



