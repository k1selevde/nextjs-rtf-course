import React from 'react';
import Timer from '../QuestionTimer/QuestionTimer';
import styles from './Question.module.scss'
import {CheckBox} from "../../shared/controls/CheckBox";
import {RadioButton} from "../../shared/controls/RadioButton";
import { ControlType } from '../../types';

type Option = {
	title: string,
	id: number
}

export type Props = {
	text: string,
	options: Option[],
	time: number
	type: ControlType
}

const Question = (props: Props) => {
	const OptionComponent = props.type === ControlType.CHECKBOX ? CheckBox : RadioButton;
	const renderOption = ({id, title}: Option) => {
		const props = {checked: false, text: title};
		return (
			<div className={styles.substrate}>
				<OptionComponent {...props} key={id} />
			</div>
		)
	}

	return (
		<div className={styles.wrapper}>
			{props.time && <Timer />}
			<h3 className={styles.text}>{props.text}</h3>

			<div className={styles.options}>
				{props.options.map(renderOption)}
			</div>
		</div>
	);


};

export default Question;
