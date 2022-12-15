import React from 'react';
import leftArrow from '../../shared/assets/leftArrow.svg'
import styles from './Navbar.module.scss'
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

type Props = {
	questions: Array<any>,
	currentQuestion: number | string
}
const Navbar = (props: Props) => {
	const {questions, currentQuestion} = props;

	const renderLink = (question: any, index: number) => {
		const id = index + 1;
		const {isAnswered, id: dbId} = question;

		const linkCN = cn({
			[styles.link]: true,
			[styles.linkActive]: id == currentQuestion,
			[styles.linkDefault]: id != currentQuestion && isAnswered,
			[styles.linkSkipped]: id != currentQuestion && !isAnswered
		})

		return (
			<Link href={`/1/${currentQuestion}`} key={dbId || index}>
				<div className={styles.linkWrapper}>
					<div className={linkCN}>
						{id}
					</div>
				</div>
			</Link>
		)
	}
	return (
		<div className={styles.wrapper}>
			<Image src={leftArrow} />
			<div className={styles.linkList}>
				{questions.map(renderLink)}
			</div>
		</div>
	);
};

export default Navbar;
