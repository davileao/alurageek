import styles from './ProductDetails.module.scss';
import itemDB from "../../data/productsold.json";
import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import NotFound from "../NotFound";
import Button from "../../components/Button";
import { v4 as uuidv4 } from 'uuid';
import Item from "../../components/Products/Item";
import productDB from "../../data/productsINV.json";

export function ProductDetailsPage () {

    const {id} = useParams();

    const navigate = useNavigate();


    const product = itemDB.map((item) => item.products.find((item) => item.id === Number(id)));
    console.log(product);
    const item = product.find(produto => produto?.id === Number(id));
    console.log(item?.id);

    let recomendedProducts = [...productDB];
    recomendedProducts = recomendedProducts.sort(() => 0.5 - Math.random()).splice(0,3);;


    if (!item) {
        return <NotFound />;
    }
    return (
        <div className={styles.productDetailsPage}>
            <div className={styles.backbtn}>
                <Button variant={'secondary'} onClick={() => navigate(-1)}>
                Voltar
            </Button></div>

            <img className={styles.img} src={item?.image} alt={item?.name}/>
            <div className={styles.productDetails}>

                <h2 className={styles.name}>{item?.name}</h2>
                <p className={styles.price}>{item?.price}</p>
                <p className={styles.description}>{item?.description}</p>
            </div>

            <div className={styles.productDetails__related}>
                <h3 className={styles.related__title}>Produtos relacionados</h3>
                <div className={styles.productDetails__related__items}>
                    {recomendedProducts.map((item) => (
                            <div key={uuidv4()}  className={styles.products__list}>
                                    <Item key={uuidv4()}
                                          {...item}
                                    />

                            </div>
                    ))}

            </div>

        </div>
        </div>
    )
}