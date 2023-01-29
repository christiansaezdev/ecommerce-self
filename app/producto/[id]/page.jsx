import ProductImageComponent from "../../componentes/ProductImage";
import styless from "./productDetail.module.css";
import BtnAdd from '../../componentes/BtnAdd'

const producto = {
  titulo: "Sandia",
  precio: "$3.500",
  tipoVenta: "UN.",
  imgUrl:
    "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/256/jpg/sandia_unidad_9622_300x300.jpg",
};
export default function ProductoNamePage(second) {
  return (
    <div className={styless.contenedor}>
    <div>
    <ProductImageComponent imgUrl={producto.imgUrl}></ProductImageComponent>
  </div>
      <div>
        <h2>{producto.titulo}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginRight: 4,
            gap:'30px',
          }}
        >
          <h4>{producto.precio}</h4> x<h4>{producto.tipoVenta}</h4>
          </div>
          <div className={styless.desc} >
          <h5>Ea nisi nisi laborum exercitation commodo quis Lorem irure sunt eiusmod do amet.Laboris elit esse duis eu elit eiusmod tempor labore incididunt exercitation laboris sint consectetur cupidatat. Nisi mollit deserunt dolore nisi anim incididunt dolore ea consectetur fugiat proident mollit fugiat. Eu ea deserunt esse reprehenderit ea tempor tempor reprehenderit exercitation aliquip.</h5>
          </div>
          {producto.producto.stock > 0 ? 
          (<BtnAdd/>):
          (<h2>Sin Stock</h2>)
        }
          
      </div>
    </div>
  );
}
