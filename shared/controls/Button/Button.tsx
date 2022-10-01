import React, {MouseEvent, ReactNode} from 'react';
import styles from './Button.module.scss';

type Props = {
	text?: string;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({onClick, text, children, disabled = false}: Props) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{text || children}
		</button>
	);
};

export default Button;
