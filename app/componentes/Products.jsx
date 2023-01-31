import BtnAdd from "./BtnAdd";
import ProductImageComponent from "./ProductImage";
import styles from "./Products.module.css";






export default function Products(producto) {
    
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

    return (
    
    <div  className={producto.producto.stock > 0 ? styles.container: styles.notstock}>
      <div className="card">
        <div className={styles.cell}>
          <ProductImageComponent
            imgUrl={producto.producto.imagenurl}
          ></ProductImageComponent>
        </div>
      </div>
      <div className="card-content">
        <div className="content" style={{height:"7rem"}}>
          <a href={`/producto/${producto.producto.nombre}`}>
            <h2>{producto.producto.nombre}</h2>
          </a>
          <div
          className="precios"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: 40,
            }}
          >
          {
            producto.producto.precio_oferta ? (
                <div style={{display:"flex", flexFlow:"column" }}>
                <h3 style={{ margin: "5px 25px 0px 0px",color:'#f449'  }}>${formatNumber(producto.producto.precio_oferta)}</h3>
                <h4 style={{ margin: "5px 25px 0px 0px", textDecorationLine:"line-through" }}>${formatNumber(producto.producto.precio)}</h4>
                </div>
            ) : (
                <div>
                <h3 style={{ margin: "5px 25px 0px 0px" }}>${formatNumber(producto.producto.precio)}</h3>
                </div>
            )
        }
            <div
              style={{
                width: "25%",
                background: "#999",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "30%",
              }}
            >
              <h4 style={{ padding: "15% 0% 15% 20%" }}>
                {producto.producto.tipoVenta || 'KG'}
              </h4>
            </div>
          </div>
          <div style={{ marginTop: 20 }}></div>
        </div>
        <div>
        {producto.producto.stock > 0 ? 
            (<BtnAdd producto={producto.producto}/>):
            (<h2>Sin Stock</h2>)
          }
        </div>
      </div>
    </div>
  );
}
