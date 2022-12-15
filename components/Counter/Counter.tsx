import React from 'react';
import styles from './Counter.module.scss'
import question from '../../shared/assets/question.svg'
import Image from "next/image";

type Props = {
	total: number,
	current: number | string
}

const Counter = ({current, total}: Props) => {
	const renderPart = () => (
		<div className={styles.part}>
			{current}/{total}
		</div>
	)

	return (
		<div className={styles.wrapper}>
			<Image src={question} />
			{renderPart()}
		</div>
	);
};

export default Counter;
