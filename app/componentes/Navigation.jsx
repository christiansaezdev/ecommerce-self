import Link from "next/link";
import styles from './Navigation.module.css'
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
    return (
        <header className="p-5 bg-blue-500">
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