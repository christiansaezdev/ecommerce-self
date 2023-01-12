import styles from './Products.module.css';

export default function ProductImageComponent({imgUrl}) {
    return(
        <div className={styles.cell}>
        <img src={imgUrl} alt="Placeholder image"/>
    </div>
    )
}