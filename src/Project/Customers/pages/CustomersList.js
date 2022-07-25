// import table-mui
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import handle
import React, { useState, useEffect } from 'react';
import CustomerForm from './CustomerForm';
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



export default function CustomersList() {
  const [customerList, setCustomerList] = useState([])


  let url = "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer"
  //  "https://62d7fd469088313935889072.mockapi.io/api/v1/customer"
  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCustomerList(json)
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
        console.log("Xóa thành công:"+ json);
      })

  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>createdAt</StyledTableCell> */}
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">postCode</StyledTableCell>
              <StyledTableCell align="right">address</StyledTableCell>
              <StyledTableCell align="right">dod</StyledTableCell>
              <StyledTableCell align="right">email</StyledTableCell>
              <StyledTableCell align="right">gender</StyledTableCell>
              <StyledTableCell align="right">phone</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((customer, index) => (
              <StyledTableRow key={customer.id}>
                <StyledTableCell align="right">{customer.name}</StyledTableCell>
                <StyledTableCell align="right">{customer.postCode}</StyledTableCell>
                <StyledTableCell align="right">{customer.address}</StyledTableCell>
                <StyledTableCell align="right">{customer.dod}</StyledTableCell>
                <StyledTableCell align="right">{customer.email}</StyledTableCell>
                <StyledTableCell align="right">{customer.gender}</StyledTableCell>
                <StyledTableCell align="right">{customer.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditButton
                    itemId={customer.id}
                    name="customers"
                    onDelete={(e) => deleteData(customer.id, e)}
                  ></EditButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
