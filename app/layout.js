import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import BannerPage from '../app/componentes/Banner';
import { font } from './font';
import FooterComponents from './componentes/Footer';



export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> SELF Productos Saludables 💚 </title>
      </head>
      <body className={font.className}> 
      <Navigation/>
      <div>
      {children}
      <FooterComponents></FooterComponents>
      </div>
      </body>
    </html>
  );
}
