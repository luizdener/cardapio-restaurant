import styles from './About.module.scss'

import Image from 'next/image'
import Sopa from '/public/sopa.jpg'
import Poke from '/public/poke.jpg'

export default function About() {
    return (
        <div className={styles.about}>
            <p>Momentos especiais</p>
            <h2>SOBRE NÓS</h2>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <Image src={Poke}/>
                </div>

                <div className={styles.card}>
                    <p>Percepção gustativa</p>
                    <h2>TRADICIONAL E MODERNO</h2>
                    <p>Experimente um menu que une o sabor nostálgico ao toque da modernidade.</p>
                </div>

                <div className={styles.card}>
                    <Image src={Sopa}/>
                </div>
            </div>
        </div>
    )
}