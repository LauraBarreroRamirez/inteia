import * as React from "react";
import { InputLabel, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import saveProductsToStorage from "../../utils/saveProductsToStorage";

const inputLabelSxStyle = (theme) => ({
  position: "absolute",
  left: 5,
  transform: "translate(0, 9px) scale(1)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

function ProductFirstPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    saveProductsToStorage(data);
    reset();
    alert("Producto guardado");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        margin={8}
        spacing={2}
        width={{ sm: 300, md: 600, xs: "50%" }}
        justifyContent="center"
      >
        <Typography variant="h5" textAlign="center">
          <b>Productos</b>
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 6 }}
          justifyContent="center"
          flexDirection="row"
          position="relative"
        >
          <InputLabel sx={inputLabelSxStyle}>Nombre</InputLabel>
          <TextField
            sx={{ width: "25ch" }}
            size="small"
            label="Nombre"
            {...register("title")}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 6 }}
          justifyContent="center"
          flexDirection="row"
          position="relative"
        >
          <InputLabel sx={inputLabelSxStyle}>Descripcion</InputLabel>
          <TextField
            sx={{ width: "25ch" }}
            size="small"
            label="Descripcion"
            {...register("description")}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 6 }}
          justifyContent="center"
          flexDirection="row"
          position="relative"
        >
          <InputLabel sx={inputLabelSxStyle}>Precio</InputLabel>
          <TextField
            sx={{ width: "25ch" }}
            size="small"
            label="Precio"
            {...register("price")}
          />
        </Stack>
        <div style={{ textAlign: "center", margin: "40px 0 20px 50px" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", padding: "12px 70px" }}
          >
            <b>Guardar</b>
          </Button>
        </div>
      </Stack>
    </form>
  );
}

export default ProductFirstPage;
