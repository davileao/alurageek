import styles from './Footer.module.scss';
import {Contact} from "./Contact";

export default function Footer() {
    return (

        <>
            <Contact/>
            <footer className={styles.footer}>
                <p>Desenvolvido por <a className={styles.link} href={'https://github.com/davileao'} target={"_blank"} rel={"noopener"}>Davi Leao</a> - 2022</p>
            </footer>
        </>
    );
}