import React from 'react';
import styles from 'pages/[test]/[num].module.scss'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../shared/controls/Button/Button";
import Question from "../../components/Question/Question";
import { useRouter } from 'next/router'
import prisma from '../../lib/prisma';
import axios from 'axios';

const Num = ({test, currentQuestion}: any) => {
	const router = useRouter();
	const currentQuestionId = Number(router.query.num);
	const questionsCount = test.questions.length;

	const goNextPage = () => {
		const nextQuestion = currentQuestionId + 1 > questionsCount ? 1 : currentQuestionId + 1;
		router.push(`/1/${nextQuestion}`);
	}

	const handleAnswerQuestion = async () => {
		await axios
			.post('/api/question/answer', {currentQuestionId})
			.then(() => {
				goNextPage()
			})
	}

	const renderActions = () => (
		<div className={styles.actions}>
			<Button onClick={goNextPage}>ПРОПУСТИТЬ</Button>
			<Button onClick={handleAnswerQuestion}>ОТВЕТИТЬ</Button>
		</div>
	)

	const renderContent = () => (
		<div className={styles.content}>
			<Header currentQuestion={currentQuestionId} questionsCount={test.questions.length} />
			<div className={styles.contentQuestionPosition}>
				<div className={styles.contentQuestion}>
					<Question {...currentQuestion} />
					{renderActions()}
				</div>
			</div>
		</div>
	)

	return (
		<div className={styles.wrapper}>
			<Navbar questions={test.questions} currentQuestion={currentQuestionId}/>
			{renderContent()}
		</div>
	);
};

export async function getServerSideProps(context: any) {
	const test = await prisma.test.findFirst({
		include: {
			questions: true
		}
	});

	const currentQuestion = await prisma.question.findFirst({
		where: {
			id: {
				equals: Number(context.params.num)
			}
		},
		include: {
			options: true
		}
	})

	return { props: {test, currentQuestion} }
}

export default Num;
