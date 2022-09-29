import styles from './Home.module.scss';
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import {Contact} from "../../components/Footer/Contact";

export default function Home() {
    return (
        <div className={styles.container}>
            <Banner/>
            <Products/>
        </div>
    );
}