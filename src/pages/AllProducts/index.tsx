import styles from './AllProducts.module.scss';
import IItem from "../../interfaces/IItem";
import itemDB from '../../data/productsold.json';
import Item from "../../components/Products/Item";
import Button from "../../components/Button";
import {v4 as uuidv4} from "uuid";

export default function AllProducts() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>All Products</h2>
            <div className={styles.button_wrapper}><Button navigate={"/admin/newproduct"} variant={"secondary"} size={"large"}>Adicionar Produto</Button></div>
            {itemDB.map((item) => (
                    <div  key={uuidv4()}  className={styles.products__list}>
                        {item.products.map((item) => (
                            <Item key={uuidv4()}
                                  {...item}
                            />
                        ))}
                    </div>
            ))}
        </div>
    );
}