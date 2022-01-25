import { NextPage } from "next";
import { NewProductContent } from "../content/NewProductContent";
import { NewProductProvider } from "../contexts/NewProduct";

const NewProduct: NextPage = () => {
  return (
    <NewProductProvider>
      <NewProductContent/>
    </NewProductProvider>
  )
};

export default NewProduct;