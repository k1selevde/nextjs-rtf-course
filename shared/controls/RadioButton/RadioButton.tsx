import React, {ChangeEvent} from 'react';
import styles from './RadioButton.module.scss';

type Props = {
	checked: boolean;
	disabled?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	text: string;
}

const RadioButton = ({checked, text, onChange, disabled = false}: Props) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				checked={checked}
				disabled={disabled}
				id={styles.input}
				onChange={onChange}
				type="radio"
			/>
			<label className={styles.label} htmlFor={styles.input}>
				{text}
			</label>
		</div>
	);
};

export default RadioButton;
