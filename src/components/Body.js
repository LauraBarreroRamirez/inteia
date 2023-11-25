import { Box, Stack, Typography } from "@mui/material";
import imgvendedor from "../assets/vendedor.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../utils/getProduct";
import { Button } from "@mui/material";

function Body() {
  const [item, setItem] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch(() => {});
  }, [productId]);
  console.log(item);

  return (
    <Box>
      <Stack alignItems="center">
        <img
          src={imgvendedor}
          alt="vendedor"
          style={{
            width: "70%",
            maxHeight: "25vh",
            margin: "30px",
            objectFit: "cover",
            objectPosition: "50% 20%",
            borderRadius: "10px",
          }}
        />
      </Stack>
      <Stack alignItems="center" margin={8}>
        {item && (
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={{ xs: 5, md: 20 }}
          >
            <Box>
              <img
                src={item.images[0]}
                alt={"imageNotFound"}
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Stack spacing={1}>
              <Typography variant="h4" style={{ color: "rgba(7,41,66,255)" }}>
                <b>{item.title}</b>
              </Typography>
              <Typography style={{ color: "rgba(7,41,66,255)" }}>
                {item.id}
              </Typography>
              <Typography style={{ color: "rgba(7,41,66,255)" }}>
                {item.description}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={10}>
                <Typography style={{ color: "rgba(7,41,66,255)" }}>
                  <b>$ {item.price * 0.19}</b>
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  style={{
                    backgroundColor: "#dcf22a",
                    color: "rgba(7,41,66,255)",
                    paddingX: "10px",
                    borderRadius: "10px",
                    size: "small",
                  }}
                >
                  <b>Agregar al carrito</b>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default Body;
