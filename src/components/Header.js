import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex" },
          backgroundColor: "rgba(7,41,66,255)",
          paddingRight: 5,
        }}
      >
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            padding: "1rem",
            paddingLeft: 6,
            mr: 2,
            display: { xs: "flex" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Link
          href="#"
          underline="none"
          style={{
            padding: "20px 10px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Recomendados
        </Link>
        <Link
          href="#"
          underline="none"
          style={{
            padding: "20px 10px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Registrarte
        </Link>
        <Link
          href="#"
          underline="none"
          style={{
            padding: "20px 10px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Inicia sesion
        </Link>
        <Link
          href="#"
          underline="none"
          style={{
            padding: "20px 10px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Total $
        </Link>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        paddingRight={5}
        fontSize={14}
        backgroundColor="#dcf22a"
      >
        <p style={{ color: "rgba(7,41,66,255)" }}> Medellin, Colombia</p>
        <Link
          href="#"
          style={{
            padding: 7,
            color: "rgba(7,41,66,255)",
            textDecoration: "none",
          }}
        >
          <b>Ingresa tu direccion</b>
        </Link>
      </Stack>
    </AppBar>
  );
}

export default Header;
