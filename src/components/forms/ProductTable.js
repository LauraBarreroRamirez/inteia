import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { getProducts } from "../../utils/getProducts";
import { Button } from "@mui/material";

export default function ProductTable() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setItem(response);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              align="center"
              style={{ border: "1px solid black" }}
            >
              <p>Productos</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" style={{ border: "1px solid black" }}>
              ID
            </TableCell>
            <TableCell align="center" style={{ border: "1px solid black" }}>
              Nombre
            </TableCell>
            <TableCell align="center" style={{ border: "1px solid black" }}>
              Descripcion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((product) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ border: "1px solid black" }}
              >
                {product.id}
              </TableCell>
              <TableCell align="center" style={{ border: "1px solid black" }}>
                {product.title}
              </TableCell>
              <TableCell align="center" style={{ border: "1px solid black" }}>
                {product.description}
              </TableCell>
              <TableCell align="center" sx={{ border: "none" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none", padding: "5px 10px" }}
                  href={`/product/${product.id}`}
                >
                  <b>Ver mas</b>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
