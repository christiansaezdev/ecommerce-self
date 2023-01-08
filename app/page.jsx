import Products from "./componentes/Products";

HomePage.defaultProps = {
    products: Array(3).fill(''),
  };
  

export default function HomePage({products}){
    return(
        <div>
        <div  className="cntProduct">
      {products.map((prd) => {
        return (
        <div>
        <Products key={prd.id}/>;
        </div> )
      })}

      </div>
      </div>
    )
}