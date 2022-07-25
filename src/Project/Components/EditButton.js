import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Comp from './Comp.css'

export default function EditButton(props) {
    const { name, onDelete, onClick, itemId } = props;
    const handleOnDelete = (id) => {
        fetch("https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/"+ id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                onDelete()
                console.log(json);
            })
            console.log("xoa thanh cong")

        // if (onDelete && typeof onDelete === "function") {
        //     onDelete();
        // }
    }

    return (

        <Stack direction="row" spacing={2}>
            <Link
                type="button"
                className="btn btn-success mx-3 btn-comp"
                to="/customers/form/"
            >
                Edit
            </Link>
            <button
                type="button"
                className="btn btn-danger btn-comp"
                onClick={() => handleOnDelete()}
            >
                Delete
            </button>
        </Stack>

    )
}
