import styles from './NewProduct.module.scss';
import { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface IProduct {
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;



}

export default function NewProduct() {
    return (
            <div className={styles.container}>
                <h1 className={styles.tittle}>Adicionar novo produto</h1>
                <form className={styles.form}>
                    <Input
                        type="text"
                        placeholder="URL da imagem"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="text"
                        placeholder="Categoria"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="text"
                        placeholder="Nome do Produto"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="num"
                        placeholder="Preço do Produto"
                        value=""
                        onChange={() => {}}
                    />

                    <Input
                        type={"textarea"}
                        placeholder={"Descrição do Produto"}
                    />

                    <Button type={'submit'} variant={'secondary'} size={'large'}>Salvar</Button>

                </form>

            </div>
    )


}

