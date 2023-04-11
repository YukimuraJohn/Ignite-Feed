import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://wallpapercave.com/dwp1x/wp1828920.jpg"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/yukimurajohn.png" />

                <strong>John Lennon</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={24}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}