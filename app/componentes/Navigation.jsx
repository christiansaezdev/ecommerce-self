import Link from "next/link";
import styles from './Navigation.module.css'
const links = [
  {
    label: "Frutas",
    route: "/",
  },
  {
    label: "Verduras",
    route: "/about",
  },
  {
    label: "Queso",
    route: "/queso",
  },
  {
    label: "Frutos Secos",
    route: "/frutos",
  },
  {
    label: "Proteinas",
    route: "/prote",
  }
];

export function Navigation(){
    return (
        <header className="p-5 bg-blue-500">
          <nav>
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