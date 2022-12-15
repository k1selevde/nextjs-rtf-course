import React from 'react';
import logo from '../../shared/assets/logo.svg';
import {Counter} from "../../components/Counter";
import Image from 'next/image';
import styles from './Header.module.scss'
import TestTimer from "../TestTimer/TestTimer";

type Props = {
	currentQuestion: number | string,
	questionsCount: number
}
const Header = (props: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Counter current={props.currentQuestion} total={props.questionsCount}/>
				<TestTimer minutes={60}/>
			</div>
			<h3 className={styles.title}>Title</h3>
			<Image src={logo} />
		</div>
	);
};

export default Header;
