import BannerPage from '../componentes/Banner';
import BannerImplement from '../componentes/Banner';
import Products from '../product/page'
//Esto se alimenta de un servicio, y es necesario reutilizar el componente BannerPage (quedara en una function)


export default function productPage({products}){
    return(
<div className="cntProduct">
<BannerPage bannerProps={bannerProps}></BannerPage>
<BannerImplement/>
      {products.map((prd) => {
        return <Products/>;
      })}

      </div>
    )}
   