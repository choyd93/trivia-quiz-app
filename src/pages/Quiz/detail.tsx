import React, { useEffect, useState } from 'react';
import {
    ContentWrap,
    NextQuizButton,
    NextQuizButtonWrap,
    QuizCard,
    QuizCategory,
    QuizContent,
    QuizHeading,
    QuizPointWrap,
} from '@pages/Quiz/styles';
import { QuizResponseResult } from '@api/types';

interface DetailProps {
    data: QuizResponseResult;
}

const Detail = ({ data }: DetailProps) => {
    const { correct_answer, incorrect_answers, category, question } = data;

    const [quizDetail, setQuizDetail] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState(-1);

    const handleSelectAnswer = (index: number) => {
        setSelectedAnswer(index);
    };

    /**
     * correct_answer와 incorrect_answers 합친 후 정답 랜덤 변경 함수
     * @param oneQuiz
     * @param arrayQuiz
     */
    const getRandomQuestion = (oneQuiz: string, arrayQuiz: string[]) => {
        const copiedQuiz = [...arrayQuiz];

        const randomIndex = Math.floor(Math.random() * (arrayQuiz.length + 1));
        copiedQuiz.splice(randomIndex, 0, oneQuiz);
        const combinedQuiz = copiedQuiz.map(item => decodeURIComponent(item));

        const correctAnswerIndex = randomIndex + 1;

        return { combinedQuiz, correctAnswerIndex };
    };

    useEffect(() => {
        const { combinedQuiz } = getRandomQuestion(
            correct_answer,
            incorrect_answers,
        );

        setQuizDetail(combinedQuiz);
    }, []);

    return (
        <ContentWrap>
            <QuizCategory>{decodeURIComponent(category)}</QuizCategory>
            <QuizPointWrap>
                <div>Question: 1 / 10</div>
                <div>Point : 0</div>
            </QuizPointWrap>
            <QuizHeading>Question 1</QuizHeading>
            <QuizContent>{decodeURIComponent(question)}</QuizContent>
            {quizDetail.map((item, index) => (
                <QuizCard
                    className={selectedAnswer === index ? 'active' : ''}
                    onClick={() => handleSelectAnswer(index)}
                >
                    {item}
                </QuizCard>
            ))}
            {selectedAnswer !== -1 && (
                <NextQuizButtonWrap>
                    <NextQuizButton>Check Answer</NextQuizButton>
                </NextQuizButtonWrap>
            )}
        </ContentWrap>
    );
};

export default Detail;
