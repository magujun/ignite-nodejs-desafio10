import { APIGatewayProxyHandler } from 'aws-lambda';
import dayjs from 'dayjs';
import { v4 as uuidV4 } from 'uuid';
import { document } from '../utils/dynamoDBClient';

interface ITodo {
	id: String;
	user_id: String;
	title: String;
	done: Boolean;
	deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (
	event,
) => {
	const { user_id } = event.pathParameters;
	const { title, deadline } = JSON.parse(
		event.body,
	) as ITodo;
	const deadlineDate = dayjs(deadline).format('YYYY-MM-DD');
	console.log(deadlineDate);
	await document
		.put({
			TableName: 'todos',
			Item: {
				id: uuidV4(),
				user_id,
				title,
				done: false,
				deadline: new Date(deadlineDate),
			},
		})
		.promise();

	return {
		statusCode: 201,
		body: JSON.stringify({
			message: 'New todo created!',
		}),
		headers: { 'Content-Type': 'application/json' },
	};
};
