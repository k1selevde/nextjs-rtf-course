import React from 'react';
import styles from 'pages/[test]/[num].module.scss'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
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

	const handleAnswerQuestion = async (answeredIds: number[]) => {
		await axios
			.post('/api/question/answer', {currentQuestionId, answeredIds})
			.then(() => {
				goNextPage()
			})
	}

	const renderContent = () => (
		<div className={styles.content}>
			<Header currentQuestion={currentQuestionId} questionsCount={test.questions.length} title={test.title}/>
			<div className={styles.contentQuestionPosition}>
				<div className={styles.contentQuestion}>
					<Question {...currentQuestion} cbAnswer={handleAnswerQuestion} cbSkip={goNextPage} />
				</div>
			</div>
		</div>
	)

	return (
		<div className={styles.wrapper}>
			<Navbar questions={test.questions.sort((a: any,b: any) => a.id > b.id)} currentQuestion={currentQuestionId}/>
			{renderContent()}
		</div>
	);
};

export async function getServerSideProps(context: any) {
	const test = await prisma.test.findFirst({
		include: {
			questions: {
				orderBy: {
					id: 'asc',
				}
			}
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
