import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import BannerPage from '../app/componentes/Banner';
import { font } from './font';
import FooterComponents from './componentes/Footer';
import {CarritoProvider} from './Context/CarritoContext'



export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> ALI-MIND Productos Saludables 💚 </title>
      </head>
      <body className={font.className}> 
     <CarritoProvider>
      <Navigation/>
      <div>
      {children}
      <FooterComponents></FooterComponents>
      </div>
      </CarritoProvider>
      </body>
    </html>
  );
}
