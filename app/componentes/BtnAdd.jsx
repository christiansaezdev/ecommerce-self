
"use client"
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import botonStyle from './BtnAdd.module.css'


const product = {
    id:1,
    nombre:"sandia"
}


export default function BtnAdd() {
    const liked = false;
    return (
        <div className={botonStyle.container} >
        <button onClick={() => console.log('first')}  className="ContainerButtonAdd">
        Agregar
        <ShoppingCart fontSize='small' width="20px" />
        </button>
        </div>
    )
}
