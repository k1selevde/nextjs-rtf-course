import React from 'react';
import Image from "next/image";
import testTimer from '../../shared/assets/testTimer.svg'
import {useCountdown} from "../../shared/hooks/useCountdown";
import styles from './TestTimer.module.scss';
import {pad} from "../../shared/common";

type Props = {
	minutes: number
}

const NOW_IN_MS = new Date().getTime();

const TestTimer = (props: Props) => {
	const timeInMS = +props.minutes * 60 * 1000;
	const [minutes, seconds] = useCountdown(NOW_IN_MS + timeInMS);
	return (
		<div className={styles.wrapper}>
			<Image src={testTimer} />
			<div className={styles.time}>
				{minutes}:{pad(seconds)}
			</div>
		</div>
	);
};

export default TestTimer;
