import styles from './CardComida.module.scss'

export default function CardComida({nome, categoria, descricao, valor}){
    return (
        <div className={styles.cardComida}>
            <section>
                <h3>{nome}</h3>
                <span>{categoria}</span>
                <p>{descricao}</p>
                <p className={styles.valor}>{valor}</p>
            </section>
        </div>
    )
}