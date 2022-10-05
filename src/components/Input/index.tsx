import styles from './Input.module.scss';

interface IInput {
    children?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInput) {
    if (props.type === "textarea") {
        return (
            <textarea
                className={styles.textarea}
                placeholder={props.placeholder}
            />
        )
    }
    return (
        <input
            className={styles.input}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />

    )
}