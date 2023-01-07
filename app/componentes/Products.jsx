
import styles from './Products.module.css'
export default function Products(){
    return (
        <div flex className={styles.container}>
                <div className="card">
                <div className={styles.cell}>
                    <img src="https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/69/jpg/pomelo_1_kg_9557_300x300.jpg" alt="Placeholder image"/>
                </div>
                </div>
                <div className="card-content">
                    <div className="content">
                        <h2>Producto Desc</h2>
                        <h4>Price: $2500</h4>
                        <p >Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                        <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                    </div>
                </div>
    </div>

)}