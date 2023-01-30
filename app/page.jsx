"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerPage from "./componentes/Banner";
import Products from "./componentes/Products";

//   const productrespaldo = [{
//     id:1,
//     titulo: "Sandia",
//     precio: "$3.500",
//     tipoVenta: "UN.",
//     imgUrl:
//       "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/256/jpg/sandia_unidad_9622_300x300.jpg",
//   },{
//   id:2,
//   titulo: "Sandia",
//   precio: "$3.500",
//   tipoVenta: "UN.",
//   imgUrl:
//     "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/256/jpg/sandia_unidad_9622_300x300.jpg",
// },];

const bannerProps = {
  backgroundColor: "#D8F3DC",
  height: "25rem",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  buttonBackgroundColor: "#000",
  buttonText: "hihihi",
  //  headline:'Titulo del banner', opcional
  imgBanner:
    "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/banners/474/jpg/ano_nuevo_despacho_gratis_5847_1900x640.jpg",
};

export default function HomePage() {
  const getProductData = async () => {
    try {
      const res = await axios.get("http://localhost:3005/api/v1/products");
      setProduct(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="box">
      <BannerPage bannerProps={bannerProps}></BannerPage>
      <div className="cntProduct">
        {product.map((prd) => {
          console.log(prd)
          return (
            <div key={prd.id}>
              <Products producto={prd} key={prd.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
