import styles from './Products.module.scss';
import item from '../../data/products.json';
import Item from "./Item";

export default function Products() {

    return (
        <div className={styles.container}>
            {item.map((item) => (
                <>
                    <div className={styles.products}>
                        <h2>{item.category}</h2>
                        <a href={item.categorylink}>Ver mais</a>
                    </div>
                    <div className={styles.products__list}>
                            {item.products.map((item) => (
                                <Item
                                    {...item}
                                />
                            ))}
                    </div>


                </>
            ))}

        </div>

    )
}