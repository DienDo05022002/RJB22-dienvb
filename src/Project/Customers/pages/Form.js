
import React from "react";
import { useForm } from "react-hook-form";


export default function Form() {
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div>
            <form
                className="row g-3 mx-auto mt-3 w-50"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="col-12" style={{ display: "flex" }}>
                    <label htmlFor="inputEmail" className="form-label" style={{ margin: 12 }}>
                        Email
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
                            // required: ERROR_EMAIL?.required,
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
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}
