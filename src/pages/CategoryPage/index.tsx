import styles from './CategoryPage.module.scss';
import { useParams, useNavigate} from 'react-router-dom';
import itemDB from "../../data/productsold.json";
import IProducts from "../../interfaces/IProducts";

export default function CategoryPage() {

    const {id} = useParams();

    const category = itemDB.find((item) => item.categoryID === Number(id));

    console.log(category)

if (!category) {
    return <p>DEU MERDA </p>;
}

    return (
        <h1>{category.category}</h1>
    );
}

