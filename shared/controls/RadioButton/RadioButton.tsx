import React, {ChangeEvent} from 'react';
import styles from './RadioButton.module.scss';

type Props = {
	checked: boolean;
	disabled?: boolean;
	onChange?: (id: number) => void;
	text: string;
	id: number
}

const RadioButton = ({id, checked, text, onChange = () => {}, disabled = false}: Props) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				checked={checked}
				disabled={disabled}
				id={styles.input}
				onChange={() => onChange(id)}
				type="radio"
			/>
			<label className={styles.label} htmlFor={styles.input}>
				{text}
			</label>
		</div>
	);
};

export default RadioButton;
