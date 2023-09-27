import styles from './Menu.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Menu() {

    const [busca, setBusca] = useState("");

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    O melhor cinema com os melhores preços!
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__titulo}>Menu</h3>
                <Buscador busca = {busca} setBusca = {setBusca}/>
                <div className={styles.menu__filtros}>
                    <Filtros/>
                </div>
            </section>
        </main>
    );
}