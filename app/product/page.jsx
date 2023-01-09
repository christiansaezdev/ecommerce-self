import BannerImplement from '../componentes/Banner';
import Products from '../product/page'
productPage.defaultProps = {
    products: Array(3).fill(''),
  };
  
export default function productPage({products}){
    return(
<div className="cntProduct">
<BannerImplement/>
      {products.map((prd) => {
        return <Products/>;
      })}

      </div>
    )}
   