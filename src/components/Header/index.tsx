import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Button from "../Button";
import {Link, NavLink} from "react-router-dom";


export default function Header() {
    return (
        <header id={styles.headerID} className={styles.header}>

                <div id={styles.logoID}><NavLink
                    to={'/'}
                >
                    <Logo className={styles.logo}/>

                </NavLink></div>

            <div id={styles.parent}>

                <div id={styles.a}><NavLink className={({isActive}) =>
                    isActive ? `${styles.active}` : undefined
                } to={"/login"}>
                    <Button size={'large'}
                    >Login </Button>
                </NavLink></div>

                <div id={styles.b}><Link to={"/allproducts"}><SearchIcon/></Link></div>


            </div>
        </header>
    );
}