import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import BannerPage from '../app/componentes/Banner';
import { font } from './font';
import FooterComponents from './componentes/Footer';
import { CartProvider } from "./Context/CartProdContext";



export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> ALI-MIND Productos Saludables 💚 </title>
      </head>
      <body className={font.className}> 
     <CartProvider>
      <Navigation/>
      <div>
      {children}
      <FooterComponents></FooterComponents>
      </div>
      </CartProvider>
      </body>
    </html>
  );
}
