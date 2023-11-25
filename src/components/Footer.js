import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <AppBar position="static">
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex" },
          backgroundColor: "rgba(7,41,66,255)",
          paddingLeft: 5,
        }}
      >
        <Link
          href="#"
          underline="none"
          style={{
            padding: "20px 10px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Preguntas frecuentes
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
          Blog
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
          Terminos y condiciones
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
          Politicas de privacidad
        </Link>
      </Box>
    </AppBar>
  );
}

export default Footer;
