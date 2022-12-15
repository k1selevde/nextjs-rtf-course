import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prisma";

export default async function answer(req: NextApiRequest, res: NextApiResponse) {
	try {
		const {currentQuestionId} = req.body
		await prisma.question.update({
			where: {
				id: +currentQuestionId
			},
			data: {
				isAnswered: true
			}
		})

		res.status(200).send({})
	} catch (err) {
		res.status(500).send({ error: 'failed to fetch data' })
	}
}
