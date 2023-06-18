import { instance } from '@api/axios.intance';
import { QuizResponse } from '@api/types';

export const getQuiz = async () => {
    try {
        const response = await instance.get<QuizResponse>(
            `?amount=10&encode=url3986`,
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
