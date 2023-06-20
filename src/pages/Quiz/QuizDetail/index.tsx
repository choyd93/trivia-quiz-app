import React, { useState } from 'react';
import {
    NextQuizButton,
    NextQuizButtonWrap,
} from '@pages/Quiz/QuizDetail/styles';
import { QuizResponse } from '@api/types';

import QuizDetail from '@pages/Quiz/QuizDetail/detail';
import { useBoundStore } from '@modules/store';

interface QuizDetailContainerProps {
    data: QuizResponse;
    quizIndex: number;
    setQuizIndex: React.Dispatch<React.SetStateAction<number>>;
    correctPoint: number;
    setCorrectPoint: React.Dispatch<React.SetStateAction<number>>;
    amount: number;
    difficulty: string;
}
const QuizDetailContainer = ({
    data,
    quizIndex,
    setQuizIndex,
    correctPoint,
    setCorrectPoint,
    amount,
    difficulty,
}: QuizDetailContainerProps) => {
    const { currentQuizInfo } = useBoundStore();

    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1); // 정답
    const [correctAnswerType, setCorrectAnswerType] = useState<
        'true' | 'false' | null
    >(null);

    const handleSelectAnswer = (index: number) => {
        setSelectedAnswer(index);
    };

    /**
     * 'currentQuizInfo'에 내가 선택한 정답을 추가해주는 함수
     */
    const handleAddMyChoice = (
        answerStatus: boolean,
        mySelectedAnswer: number,
    ) => {
        const copiedArr = [...currentQuizInfo];
        copiedArr[quizIndex].myChoiceStatus = answerStatus;
        copiedArr[quizIndex].myChoiceIndex = mySelectedAnswer;
    };

    /**
     * 정답 확인 및 포인트 추가 함수
     */
    const handleCheckAnswer = () => {
        const mySelectedAnswer = selectedAnswer + 1;

        if (mySelectedAnswer === correctAnswerIndex) {
            setCorrectAnswerType('true');
            handleAddMyChoice(true, mySelectedAnswer);
            setCorrectPoint(correctPoint + 1);
        } else {
            setCorrectAnswerType('false');
            handleAddMyChoice(false, mySelectedAnswer);
        }
    };

    /**
     * 다음 문제 이동 및 선택한 부분 초기화 함수
     */
    const handleNextQuestion = () => {
        setQuizIndex(quizIndex + 1);
        setCorrectAnswerType(null);
        setSelectedAnswer(-1);
    };

    const isQuiz = quizIndex >= 0 && quizIndex < Number(amount);

    return (
        isQuiz && (
            <>
                <QuizDetail
                    data={data.results[quizIndex]}
                    quizIndex={quizIndex}
                    handleSelectAnswer={handleSelectAnswer}
                    selectedAnswer={selectedAnswer}
                    correctAnswerType={correctAnswerType}
                    setCorrectAnswerIndex={setCorrectAnswerIndex}
                    correctPoint={correctPoint}
                    amount={amount}
                    difficulty={difficulty}
                />
                {selectedAnswer !== -1 && (
                    <NextQuizButtonWrap>
                        <NextQuizButton
                            onClick={
                                correctAnswerType !== null
                                    ? handleNextQuestion
                                    : handleCheckAnswer
                            }
                            className={
                                correctAnswerType !== null ? 'next' : 'check'
                            }
                        >
                            {correctAnswerType !== null
                                ? 'Next Question'
                                : 'Check Answer'}
                        </NextQuizButton>
                    </NextQuizButtonWrap>
                )}
            </>
        )
    );
};

export default QuizDetailContainer;
