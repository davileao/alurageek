import styles from './Products.module.scss';
import itemDB from '../../data/productsold.json';
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import IItem from "../../interfaces/IItem";
import IProducts from "../../interfaces/IProducts";

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

    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            {itemDB.map((item) => (
                <React.Fragment key={uuidv4()} >
                    <div className={styles.products}>
                        <h2>{item.category}</h2>
                        <Link to={`/categorypage/${item.categoryID}`} >Ver mais</Link>
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