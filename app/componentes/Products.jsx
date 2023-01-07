
import styles from './Products.module.css'
export default function Products(){
    return (
        <div flex className={styles.container}>
                <div className="card">
                <div className={styles.cell}>
                    <img src="https://cdn.shopify.com/s/files/1/2355/7183/products/SnacksdeArrozSinGlutenFinasHierbas80gr-DonMarcos_1800x.jpg?v=1670437998" alt="Placeholder image"/>
                </div>
                </div>
                <div className="card-content">
                    <div className="content">
                        <h4>Producto Desc</h4>
                        <p >Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                        <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                    </div>
                </div>
    </div>

)}