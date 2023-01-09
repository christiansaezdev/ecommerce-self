
import BtnAdd from './BtnAdd'
import styles from './Products.module.css'
export default function Products(){
    return (
        <div className={styles.container}>
                <div className="card">
                <div className={styles.cell}>
                    <img src="https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/69/jpg/pomelo_1_kg_9557_300x300.jpg" alt="Placeholder image"/>
                </div>
                </div>
                <div className="card-content">
                    <div className="content">
                    <h2>Producto Desc</h2>
                    <div style={{display:'flex', justifyContent:'space-between',marginRight:40}}>
                    <h4 style={{margin:'5px 25px 0px 0px'}}>Price: $2500</h4>
                    <div style={{width:'25%', background:'#999',alignItems:'center',justifyContent:'center', borderRadius:'30%'}}>
                    <h4 style={{padding:'15% 0% 15% 20%'}}>KG</h4>    
                    </div>
                    </div>
                        <div style={{marginTop:20}}>
                        <p >Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. </p>
                        <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>    
                        </div>
                    </div>
                    <div style={{display:'inline-flex'}}>
                    <BtnAdd/>
                    </div>
                </div>
    </div>

)}