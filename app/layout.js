import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import { font } from './font';

RootLayout.defaultProps = {
  products: Array(3).fill(''),
};

export default function RootLayout({ children,products }) {
  return (
    <html>
      <head>
        <title> SELF Productos Saludables 💚 </title>
      </head>
      <body className={font.className}>
      <Navigation/>
      {children}
      </body>
    </html>
  );
 
}
