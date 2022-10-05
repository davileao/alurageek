import styles from './Banner.module.scss';
import Button from "../Button";

const Banner = () => {
    return (
            <div className={styles.banner}>
            <div className={styles.text__container}><h2 className={styles.title}>Dezembro Promocional</h2>
                <p className={styles.subtitle}>Produtos selecionados com 33% de desconto</p>
                <Button variant={'secondary'} size={'large'}>Ver consoles</Button>
            </div>
        </div>

);
}

export default Banner;