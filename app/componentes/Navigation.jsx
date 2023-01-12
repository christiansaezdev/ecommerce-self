"use client"
import Link from "next/link";
import styles from './Navigation.module.css'
import { useState } from "react";
const links = [
  {
    label: "Frutas 🌛",
    route: "/",
  },
  {
    label: "Verduras 🥗",
    route: "/about",
  },
  {
    label: "Queso 🧀",
    route: "/queso",
  },
  {
    label: "Frutos Secos 🥜",
    route: "/frutos",
  },
  {
    label: "Proteinas 🏋️",
    route: "/prote",
  },
  {
    label: "Login 🙎",
    route: "/login",
  }
];




export function Navigation(){
  const [cant, setCant] = useState(10);
const [isAdmin, setIsAdmin] = useState(false);
const [isLoged, setIsLoged] = useState(true);
const [session, setSession] = useState(isLoged ? {username:'Christian'} : 0);
    return (
        <header className="p-5 bg-blue-500">
        <div className='headerNav'>
      <h1>SELF 💚</h1>  
      <h4 className='navElement'>Slogan... somos una compañia verde xd 🍏</h4>
     {isLoged ? <p className='navElement'> Bienvenido {session.username}</p> :  <a className='navElement' href="/login">Iniciar Sesion 💻</a>}
      {isAdmin ?  <a className='navElement' href="/adminPage">Administrar 💻</a> : ''}
      {!isAdmin ? <a className='navElement' href="/login">Carrito 🥕 x {cant || 4}</a> : ''}
      </div>
          <nav style={{border:'1px solid #f7f7f7', display:'block', fontSize:18}}>
            <ul className={styles.navigation}>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}