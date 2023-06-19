import { instance } from '@api/axios.intance';
import { QuizResponse } from '@api/types';

const validateAnyType = ({
    amount,
    category,
    difficulty,
    type,
}: GetQuizProps) => {
    let url = `?amount=${amount}&encode=url3986`;

    if (category !== 'any') {
        url += `&category=${category}`;
    }
    if (difficulty !== 'any') {
        url += `&difficulty=${difficulty}`;
    }
    if (type !== 'any') {
        url += `&type=${type}`;
    }
    return url;
};

interface GetQuizProps {
    amount: string;
    category: string;
    difficulty: string;
    type: string;
}
export const getQuiz = async ({
    difficulty,
    amount,
    type,
    category,
}: GetQuizProps) => {
    try {
        const urlResult = validateAnyType({
            amount,
            category,
            difficulty,
            type,
        });
        const response = await instance.get<QuizResponse>(`${urlResult}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
