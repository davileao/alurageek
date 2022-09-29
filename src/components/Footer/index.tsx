import styles from './Footer.module.scss';
import {Contact} from "./Contact";

export default function Footer() {
    return (

        <>
            <Contact/>
            <footer className={styles.footer}>
                <p>Desenvolvido por Davi Leao - 2022</p>
            </footer>
        </>
    );
}