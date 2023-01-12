
import BtnAdd from './BtnAdd'
import ProductImageComponent from './ProductImage'
import styles from './Products.module.css'

const producto = {
    titulo:'Sandia',
    precio:'$3.500',
    tipoVenta:'UN.',
    imgUrl:'https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/256/jpg/sandia_unidad_9622_300x300.jpg'

}

export default function Products(product){
    return (
        <div className={styles.container}>
                <div className="card">
                <div className={styles.cell}>
                    <ProductImageComponent imgUrl={producto.imgUrl}></ProductImageComponent>
                </div>
                </div>
                <div className="card-content">
                    <div className="content">
                    <a href={`/producto/${producto.titulo}`}><h2>{producto.titulo}</h2></a>
                    <div style={{display:'flex', justifyContent:'space-between',marginRight:40}}>
                    <h4 style={{margin:'5px 25px 0px 0px'}}>{producto.precio}</h4>
                    <div style={{width:'25%', background:'#999',alignItems:'center',justifyContent:'center', borderRadius:'30%'}}>
                    <h4 style={{padding:'15% 0% 15% 20%'}}>{producto.tipoVenta}</h4>    
                    </div>
                    </div>
                        <div style={{marginTop:20}}>
                        </div>
                    </div>
                    <div>
                    <BtnAdd/>
                    </div>
                </div>
    </div>

)}