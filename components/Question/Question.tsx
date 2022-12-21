import React, {useEffect, useState} from 'react';
import Timer from '../QuestionTimer/QuestionTimer';
import styles from './Question.module.scss'
import {CheckBox} from "../../shared/controls/CheckBox";
import {RadioButton} from "../../shared/controls/RadioButton";
import { ControlType } from '../../types';
import Button from "../../shared/controls/Button/Button";

type Option = {
	title: string,
	id: number
}

export type Props = {
	text: string,
	options: Option[],
	time: number
	type: ControlType
	cbSkip: Function
	cbAnswer: Function

	checked: number[]
}

const Question = (props: Props) => {
	const OptionComponent = props.type === ControlType.CHECKBOX ? CheckBox : RadioButton;
	const getDefaultState = (props: Props) => props.options.map(i => ({...i, checked: props.checked.includes(i.id)}))

	const [localOptions, setLocalOptions] = useState(getDefaultState(props));

	useEffect(() => {
		setLocalOptions(getDefaultState(props))
	}, [props])

	const onChange = (id: number) => {
		const updated = localOptions.map((item) => {
			const newItem = {...item}
			if (item.id === id) {
				newItem.checked = !newItem.checked
			} else {
				newItem.checked = false;
			}

			return newItem;
		})

		setLocalOptions(updated)
	}

	const onClick = (id: number) => {
		const updated = localOptions.map((item) => {
			const newItem = {...item}
			if (item.id === id) {
				newItem.checked = !newItem.checked
			}

			return newItem;
		})

		setLocalOptions(updated)
	}


	const renderOption = ({id, title, checked}: Option & {checked: boolean}) => {
		const optionProps = {
			checked,
			text: title,
			id
		};
		if (props.type === 'RADIO') {
			// @ts-ignore
			optionProps.onChange = onChange
		}

		if (props.type === 'CHECKBOX') {
			// @ts-ignore
			optionProps.onClick = onClick
		}

		return (
			<div className={styles.substrate}>
				<OptionComponent {...optionProps} key={id} />
			</div>
		)
	}

	const handleSkip = () => {
		props.cbSkip();
	}

	const handleAnswer = () => {
		const answeredIds = localOptions.filter(i => i.checked).map(i => i.id);
		props.cbAnswer(answeredIds)
	}

	const renderActions = () => (
		<div className={styles.actions}>
			<Button onClick={handleSkip}>ПРОПУСТИТЬ</Button>
			<Button onClick={handleAnswer}>ОТВЕТИТЬ</Button>
		</div>
	)

	return (
		<div className={styles.wrapper}>
			{props.time && <Timer />}
			<h3 className={styles.text}>{props.text}</h3>

			<div className={styles.options}>
				{localOptions.map(renderOption)}
			</div>

			{renderActions()}
		</div>
	);


};

export default Question;
