import styles from './Products.module.scss';
import itemDB from '../../data/products.json';
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
import React from "react";

export default function Products() {

    let innerWidth = window.innerWidth;

    const showItens = () => {
        if (innerWidth > 800) {
            return 5;
            }
         else {
            return 4;
        }

    };

    return (
        <div className={styles.container}>
            {itemDB.map((item) => (
                <React.Fragment key={uuidv4()} >
                    <div className={styles.products}>
                        <h2>{item.category}</h2>
                        <a href={item.categoryID}>Ver mais</a>
                    </div>
                    <div   className={styles.products__list}>
                            {item.products.slice(0,showItens()).map((item) => (
                                <Item key={uuidv4()}
                                      {...item}
                                />
                            ))}
                    </div>


                </React.Fragment>
            ))}

        </div>

    )
}