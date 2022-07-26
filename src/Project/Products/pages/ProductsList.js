// import table-mui
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import EditButton from '../../Components/EditButton';
//handle table-mui
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function ProductsList() {
  const [productList, setProductList] = useState([])

  let url = "https://62d7fd469088313935889072.mockapi.io/api/v1/Products"
  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProductList(json)
      })
  }, []);

  const deleteData = (id) => {
    fetch("https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProductList(productList.filter(product => product.id !== id))
        console.log(console.log("Xóa thành công:"+ json))
      })
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">color</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>
              <StyledTableCell align="right">description</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell align="right">{product.name}</StyledTableCell>
                <StyledTableCell align="right">{product.color}</StyledTableCell>
                <StyledTableCell align="right">{product.price}</StyledTableCell>
                <StyledTableCell style={{alignItems: "center"}}>{product.description}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditButton
                  itemId={product.id}
                  name="products"
                  onDelete={(e) => deleteData(product.id, e)}
                  ></EditButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
