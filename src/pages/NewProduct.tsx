import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NewProductContent } from "../content/NewProductContent";
import { NewProductProvider } from "../contexts/NewProduct";
import { getToken } from "../utils/JsonWebToken";

const NewProduct: NextPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    if(!getToken())
      replace("/");
  },[replace])
  
  return (
    <NewProductProvider>
      <NewProductContent/>
    </NewProductProvider>
  )
};

export default NewProduct;