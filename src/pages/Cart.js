import EditIcon from "@mui/icons-material/Edit";
import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "../style/style.css";
import CustomButton from "../components/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Cart = () => {
  const { cart, removeFromCart, editCartItem } = useContext(CartContext);
  const initialCounts = cart.map((item) => item.quantity); // Initialize state with an array of zeros based on MenuList length
  const [counts, setCounts] = useState(initialCounts);

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      // Ensure count doesn't go below zero
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };
  let total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  let quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <TableContainer
      component={Paper}
      sx={{ minHeight: "90vh", p: 5, width: "100%" }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {cart.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <img
                  src={row.imageUrl}
                  height="50px"
                  width="50px"
                  alt="menu item"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  className="btn-quantity"
                  variant="contained"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </Button>
                <TextField
                  value={counts[index] || row.quantity}
                  variant="outlined"
                  size="small"
                  sx={{ mx: 1, width: "50px" }}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px",
                    },
                  }}
                />
                <Button
                  className="btn-quantity"
                  variant="contained"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="btn-container">
                  <CustomButton
                    onClick={() => removeFromCart(row.id)}
                    label="Delete"
                    startIcon={<DeleteIcon />}
                    styleType="btn-primary"
                  />

                  <CustomButton
                    onClick={() => editCartItem(row.id,counts[index])}
                    label="Edit"
                    startIcon={<EditIcon />}
                    styleType="btn-primary"
                  />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}

          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">
              <b>Quantity = {quantity} </b>
            </StyledTableCell>
            <StyledTableCell align="right">
              {" "}
              <b>Total = {total} $ </b>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
