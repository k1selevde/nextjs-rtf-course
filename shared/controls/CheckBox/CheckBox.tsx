import React, {MouseEvent} from 'react';
import styles from './CheckBox.module.scss';

type Props = {
	checked: boolean;
	disabled?: boolean;
	onClick?: (id: number) => void;
	text: string;
	id: number;
}

const CheckBox = ({id, text, checked = true, onClick = () => {}, disabled = false}: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.checkWrapper} onClick={() => onClick(id)}>
				<input
					className={styles.input}
					checked={checked}
					disabled={disabled}
					id={styles.input}
					type="checkbox"
				/>
				<svg width={14} height={14} className={styles.svg} viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</svg>
			</div>

			<label className={styles.label} htmlFor={styles.input}>
				{text}
			</label>
		</div>
	);
};

export default CheckBox;
