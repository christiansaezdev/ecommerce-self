import styles from './Footer.module.css'

const ubicacion = '';
export default function FooterComponents(){

    return(
        <footer className={styles.footer}>
        <div className={styles.contenedor}>
        
        <div>
        <p>Self 2023</p>
           <p>Algun lugar #123, Providencia 🌏{ubicacion}</p>
           <p></p>
           <p>Contacto@self.cl</p>
           <p>Todos los derechos reservados</p>
           <link rel="contacto" type="link" href="/contacto">Contacto</link>

        </div>

        
        </div>
        </footer>
    );
}