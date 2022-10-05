import styles from './Contact.module.scss';
import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import Button from "../../Button";
import Input from "../../Input";

export const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
              <img src={logo} alt="logo" className={styles.logo} />
                <a className={styles.link} href={"#"} >Quem somos nós</a>
                <a className={styles.link} href={"#"} >Política de arivacidade</a>
                <a className={styles.link} href={"#"} >Programa de fidelidade</a>
                <a className={styles.link} href={"#"} >Nossas lojas</a>
                <a className={styles.link} href={"#"} >Quero ser franqueado</a>
                <a className={styles.link} href={"#"} >Anuncie aqui</a>
            </div>

            <div className={styles.form}>
                <p className={styles.form__title}>Fale Conosco</p>
                <Input type="text" placeholder="Nome" />

                <textarea placeholder="Escreva sua mensagem" />
                <Button variant={'secondary'}>Enviar Mensagem</Button>
            </div>
        </div>
    );
}