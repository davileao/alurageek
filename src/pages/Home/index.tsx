import styles from './Home.module.scss';
import Banner from "../../components/Banner";
import Products from "../../components/Products";

export default function Home() {
    return (
        <div className={styles.container}>
            <Banner/>
            <Products/>
        </div>
    );
}