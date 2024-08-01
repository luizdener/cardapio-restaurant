import styles from './Categoria.module.scss'

export default function ItemCategoria({categoria, handleClick}){
    return (
        <button className={styles.categoria} onClick={handleClick}>
            {categoria}
        </button>
    )
}