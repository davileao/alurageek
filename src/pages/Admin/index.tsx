import styles from './Admin.module.scss';
import {Outlet} from "react-router-dom";

export default function Admin() {
    return (
        <div className={styles.container}>
            <h1>Admin</h1>
            <Outlet/>
        </div>
    )
}