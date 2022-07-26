import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Comp from './Comp.css'

export default function EditButton(props) {
    const { name, onDelete, onClick, itemId } = props;
    const handleOnDelete = (id) => {
        fetch("https://62d7fd469088313935889072.mockapi.io/api/v1/Customer/" + itemId ,{
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
            alert("xoa thanh cong")
    }

    return (

        <Stack direction="row" spacing={2}>
            <Link
                type="button"
                className="btn btn-success mx-3 btn-comp"
                to={`/${name}/edit/${itemId}`}
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
