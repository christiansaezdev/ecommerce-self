import Products from "./componentes/Products";

HomePage.defaultProps = {
    products: Array(3).fill(''),
  };
  

export default function HomePage({products}){
    return(
        <div>
            
        
        <h1>SELF 💚</h1>
        <div className="cntProduct">
      {products.map((prd) => {
        return <Products/>;
      })}

      </div>
      </div>
    )
}