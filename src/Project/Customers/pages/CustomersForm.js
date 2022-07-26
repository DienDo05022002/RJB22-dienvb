import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ERROR_EMAIL = {
    required: "Email Address is required",
    pattern: "Please include an '@' in the email address ",
};

export default function CustomersForm() {
    let { id } = useParams();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();


    const [customerForm, setCustomerForm] = useState([])
    // const onSubmit = data => console.log(data);



    async function fetchDataCustomer(urlCustomer) {
        console.log(1);
        try {
            let response = await axios.get(urlCustomer);
            let temp = await response.data;
            console.log(temp);
            if (id) {
                setValue("name", temp?.name);
                setValue("postCode", temp?.postCode);
                setValue("address", temp?.address);
                setValue("dod", temp?.dod);
                setValue("gender", temp?.gender);
                setValue("phone", temp?.phone);
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
                "https://62d7fd469088313935889072.mockapi.io/api/v1/Customer/" + id;
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

        // console.log(dumpData);
        fetch("https://62d7fd469088313935889072.mockapi.io/api/v1/Customer", {
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
    const onClick = () => {
        alert("Tạo thành công. Chuyển đến List để xem")
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
                    />{errors.name?.type === 'required' && <p style={{ color: "red", fontSize : "x-small" }}>Vui lòng điền tên</p>}
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        postCode
                    </label>
                    <input
                        className="form-control"
                        id="postCode"
                        placeholder="postCode"
                        {...register("postCode")}
                    />{errors.postCode && <p style={{ color: "red", fontSize : "x-small" }}>Vui lòng điền postCode</p>}
                </div>
                <div style={{ display: "flex", marginTop: 15, marginBottom: 15 }}>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Address
                    </label>
                    <input
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                        ref={() => register({ name: "address" , fontSize : "x-small"})}
                        {...register("address", {
                            required: true
                        })}
                    />{errors.address && <p style={{ color: "red" , fontSize : "x-small"}}>Vui lòng điền Address</p>}
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        dod
                    </label>
                    <input
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                        ref={() => register({ name: "dod" })}
                        {...register("dod", {
                            required: true
                        })}
                    />{errors.dod && <p style={{ color: "red" , fontSize : "x-small"}}>Vui lòng điền dod</p>}
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
                    /><p>{errors.email?.type === "pattern" && "Điền Email hợp lệ"}</p>
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
                        placeholder="Phone" {...register("Phone")}
                    />
                    {errors.Phone && <p style={{ color: "red" , fontSize : "x-small" }}>Vui lòng điền sđt</p>}

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



