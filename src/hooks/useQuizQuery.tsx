import { useQuery } from '@tanstack/react-query';
import { QuizResponse } from '@api/types';
import { getQuiz } from '@api/axios.custom';
import { AxiosError } from 'axios';

interface UseQuizQueryProps {
    amount: string;
    category: string;
    difficulty: string;
    type: string;
}

const UseQuizQuery = ({
    difficulty,
    amount,
    type,
    category,
}: UseQuizQueryProps) => {
    const { data, error, isLoading } = useQuery<
        QuizResponse,
        AxiosError,
        QuizResponse
    >(['quizData'], () => getQuiz({ difficulty, amount, type, category }), {
        retry: false,
        staleTime: Infinity,
    });
    return { data, isLoading, error };
};

export default UseQuizQuery;
