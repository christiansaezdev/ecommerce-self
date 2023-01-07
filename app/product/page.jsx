import Products from '../product/page'
productPage.defaultProps = {
    products: Array(3).fill(''),
  };
  
export default function productPage({products}){
    return(
<div className="cntProduct">
      {products.map((prd) => {
        return <Products/>;
      })}

      </div>
    )}
   