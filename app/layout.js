import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import BannerPage from './banner/page';
import { font } from './font';

RootLayout.defaultProps = {
  products: Array(3).fill(''),
};


//Esto se alimenta de un servicio, y es necesario reutilizar el componente BannerPage (quedara en una function)
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

const cant = null; // es la cantidad de elementos del carrito

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> SELF Productos Saludables 💚 </title>
      </head>
      <body className={font.className}> 
      <div className='headerNav'>
      <h1>SELF 💚</h1>  
      <h4 className='navElement'>Slogan... somos una compañia verde xd 🍏</h4>
      <a className='navElement' href="/login">Iniciar Sesion 💻</a>
      <a className='navElement' href="/login">Carrito 🥕 x {cant || 4}</a>
      </div>
      <Navigation/>
      <div>
      <BannerPage bannerProps={bannerProps}></BannerPage>
      </div>
      {children}
      </body>
    </html>
  );
 
}
