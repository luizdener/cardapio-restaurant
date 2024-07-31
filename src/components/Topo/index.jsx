import styles from './Topo.module.scss'

export default function Topo(){
    return (
        <header className={styles.topo}>
            <nav>
                <a href="/">HOME</a>
                <a href="">MENU</a>
                <a href="">ABOUT</a>
                <a href="">CONTACTS</a>
            </nav>

            <div className={styles.textContainer}>
                <p>Bem Vindo</p>
                <h1>Kamado Sushi bar</h1>
                <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</p>
            </div>
        </header>
    )
}