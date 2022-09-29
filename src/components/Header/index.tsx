import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Button from "../Button";
import {Link, NavLink} from "react-router-dom";


export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink
                to={'/'}
            >
                <Logo className={styles.logo}/></NavLink>
            <NavLink className={({isActive}) =>
                isActive ? `${styles.active}` : undefined
            }  to={"/login"}>
                <Button size={'large'}
                >Login </Button></NavLink>

            <Link to={"/all"}><SearchIcon/></Link>

        </header>
    );
}