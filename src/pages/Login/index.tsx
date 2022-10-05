import styles from './Login.module.scss';
import Button from "../../components/Button";

export default function Login() {
    return (
        <div className={styles.login}>
         <h2 className={styles.tittle}>Iniciar Sessão</h2>
            <input type="text" placeholder="Escreva seu email" />
            <input type="password" placeholder="Escreva sua senha" />
            <Button navigate={'/allproducts'} variant={'secondary'} size={'large'}>Entrar</Button>
        </div>

    );
}