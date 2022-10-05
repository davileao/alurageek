import './Item.module.scss';
import styles from "../Products.module.scss";
import IItem from "../../../interfaces/IItem";
import {Link} from "react-router-dom";

export default function Item(props: IItem) {

    const { name, price, image, id } = props;

    return (
        <div className={styles.products__item}>
            <img src={image} alt={name}/>
            <div className={styles.products__item__info}>
                <h3>{name}</h3>
                <span>{price}</span>
                <Link to={`/productpage/${id}`}>Ver produto</Link>
            </div>
        </div>
            )
}

