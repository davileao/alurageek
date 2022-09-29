import styles from './Button.module.scss';
import {useNavigate} from "react-router-dom";
import React from "react";


interface IButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    navigate?: string;
}


export default function Button(props: IButtonProps) {
    const navigate = useNavigate();
    const {children, onClick, variant, size, disabled, navigate: navigateTo} = props;

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
        if (onClick) {
            onClick();
        }
    }

    return (
        <button
            className={`${styles.button} ${styles[variant || 'primary']} ${styles[size || 'medium']}` + (disabled ? ` ${styles.disabled}` : '')}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}


// const Button: React.FC<IButtonProps> = (
//
//     {
//
//             children,
//             onClick,
//             variant = 'primary',
//             size = 'medium',
//             disabled = false,
//
//         }) => {
//         return (
//
//             <button
//                 className={styles.button + ' ' + styles[variant] + ' ' + styles[size] + ' ' + (disabled ? styles.disabled : '')}
//                 onClick={onClick}
//                 disabled={disabled}
//             >
//                 {children}
//             </button>
//         );
//
//     }
//     export default Button;