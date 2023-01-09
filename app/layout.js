import '../styles/globals.css'

import { Navigation } from "./componentes/Navigation";
import Products from './componentes/Products';
import BannerPage from '../app/componentes/Banner';
import { font } from './font';

 RootLayout.defaultProps = {
  products: Array(3).fill(''),
};




const cant = null; // es la cantidad de elementos del carrito
const isAdmin = true;
const isLoged = true;
const session = {username:'Christian'};

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
     {isLoged ? <p className='navElement'> Bienvenido {session.username}</p> :  <a className='navElement' href="/login">Iniciar Sesion 💻</a>}
      {isAdmin ?  <a className='navElement' href="/adminPage">Administrar 💻</a> : ''}
      {!isAdmin ? <a className='navElement' href="/login">Carrito 🥕 x {cant || 4}</a> : ''}
      </div>
      <Navigation/>
      <div>
      {children}
      </div>
      </body>
    </html>
  );
}
