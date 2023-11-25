import { Stack } from "@mui/material";
import ProductDetailForm from "./components/forms/ProductDetailForm";
import ProductTable from "./components/forms/ProductTable";

function ProductDetail() {
  return (
    <Stack>
      <Stack spacing={5} alignItems={"center"}>
        <ProductDetailForm />
        <ProductTable />
      </Stack>
    </Stack>
  );
}

export default ProductDetail;
