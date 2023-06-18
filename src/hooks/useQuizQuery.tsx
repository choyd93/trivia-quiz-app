import { useQuery } from '@tanstack/react-query';
import { QuizResponse } from '@api/types';
import { getQuiz } from '@api/axios.custom';
import { AxiosError } from 'axios';

const UseQuizQuery = () => {
    const { data, error, isLoading } = useQuery<
        QuizResponse,
        AxiosError,
        QuizResponse
    >(['quizData'], () => getQuiz(), { retry: false, staleTime: Infinity });
    return { data, isLoading, error };
};

export default UseQuizQuery;
