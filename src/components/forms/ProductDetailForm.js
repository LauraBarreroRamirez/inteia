import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { getProducts } from "../../utils/getProducts";
import { useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";

const inputLabelSxStyle = (theme) => ({
  position: "absolute",
  left: 5,
  transform: "translate(0, 8px) scale(1)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export default function ProductDetailForm() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch(() => {});
  }, []);

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        margin={8}
        spacing={2}
        width={{ md: 500, xs: "100%" }}
        justifyContent="center"
      >
        <Typography variant="h5" textAlign="center">
          <b>Detalle producto</b>
        </Typography>
        <Stack justifyContent="center" flexDirection="row" position="relative">
          <InputLabel sx={inputLabelSxStyle}>Producto</InputLabel>
          <Select
            size="small"
            defaultValue=""
            sx={{ width: { xs: "65%", md: 250 } }}
            value={watch().producto}
            {...register("producto")}
            displayEmpty
          >
            <MenuItem value="" disabled>
              <em>Seleccione producto</em>
            </MenuItem>
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.title}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack justifyContent="center" flexDirection="row" position="relative">
          <InputLabel sx={inputLabelSxStyle}>Cantidad</InputLabel>
          <TextField
            sx={{ width: { xs: "65%", md: 250 } }}
            size="small"
            label="Descripcion"
            {...register("description")}
          />
        </Stack>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", padding: "12px 65px" }}
          >
            <b>Agregar al carrito</b>
          </Button>
        </div>
      </Stack>
    </form>
  );
}
