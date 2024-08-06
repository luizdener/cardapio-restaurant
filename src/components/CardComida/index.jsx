import Image from 'next/image'
import styles from './CardComida.module.scss'

export default function CardComida({imagem, nome, categoria, descricao, valor}){
    return (
        <div className={styles.cardComida}>
            <Image className={styles.imagem} src={imagem}/>
            <section>
                <h3>{nome}</h3>
                <span>{categoria}</span>
                <p>{descricao}</p>
                <p className={styles.valor}>{valor}</p>
            </section>
        </div>
    )
}