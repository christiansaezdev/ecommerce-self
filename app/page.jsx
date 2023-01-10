import BannerPage from "./componentes/Banner";
import Products from "./componentes/Products";

HomePage.defaultProps = {
    products: Array(20).fill(''),
  };
  

  const bannerProps = {
    backgroundColor:'#D8F3DC',
    height:'25rem',
    width:'100%',
    maxHeight: '100%',
    maxWidth:'100%',
    buttonBackgroundColor:'#000',
    buttonText:'hihihi',
    //  headline:'Titulo del banner', opcional
    imgBanner:'https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/banners/474/jpg/ano_nuevo_despacho_gratis_5847_1900x640.jpg'
  
  };

export default function HomePage({products}){
    return(
        <div>
        <BannerPage bannerProps={bannerProps}></BannerPage>
        <div  className="cntProduct">
      {products.map((prd) => {
        return (
        <div>
        <Products key={prd.id}/>
        </div> )
      })}

      </div>
      </div>
    )
}