import './Item.module.scss';
import styles from "../Products.module.scss";
import IItem from "../../../interfaces/IItem";
import {v4 as uuidv4} from "uuid";
import {Link, useNavigate} from "react-router-dom";

export default function Item(props: IItem) {

    const { name, price, image, id } = props;

    const navigate = useNavigate();

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

