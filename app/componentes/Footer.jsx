import styles from './Footer.module.css'

const ubicacion = '';
export default function FooterComponents(){

    return(
        <footer className={styles.footer}>
        <div className={styles.contenedor}>
        
        <div>
        <p>ALI-MIND 2023</p>
           <p>Algun lugar #123, Providencia 🌏{ubicacion}</p>
           <p></p>
           <p>Contacto@ali-mind.cl</p>
           <p>Todos los derechos reservados</p>

        </div>

        
        </div>
        </footer>
    );
}