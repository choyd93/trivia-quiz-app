import React, { useEffect, useState } from 'react';
import {
    QuizCard,
    QuizCategory,
    QuizContent,
    QuizHeading,
    QuizPointWrap,
    QuizSubContents,
} from '@pages/Quiz/QuizDetail/styles';
import { QuizResponseResult } from '@api/types';
import { useBoundStore } from '@modules/store';

interface DetailProps {
    data: QuizResponseResult;
    quizIndex: number;
    handleSelectAnswer(index: number): void;
    selectedAnswer: number;
    correctAnswerType: 'true' | 'false' | null;
    setCorrectAnswerIndex: React.Dispatch<React.SetStateAction<number>>;
    correctPoint: number;
    amount: number;
    difficulty: string;
}

const QuizDetail = ({
    data,
    quizIndex,
    handleSelectAnswer,
    selectedAnswer,
    correctAnswerType,
    setCorrectAnswerIndex,
    correctPoint,
    amount,
    difficulty,
}: DetailProps) => {
    const { correct_answer, incorrect_answers, category, question } = data;
    const currentQuizIndex = quizIndex + 1;
    const [quizDetail, setQuizDetail] = useState<string[]>([]);

    const { updateCurrentQuizInfo, currentQuizInfo } = useBoundStore();

    /**
     * 다시풀기 및 오답노트를 위한 설정 스토어 저장
     * @param currentQuizNumber
     * @param decodedQuiz
     * @param correctAnswer
     * @param correctAnswerIndex
     */
    const handleSetCurrentQuizInfo = (
        currentQuizNumber: number,
        decodedQuiz: string[],
        correctAnswer: string,
        correctAnswerIndex: number,
    ) => {
        const copiedArr = [...currentQuizInfo];
        const temp = {
            quizIndex: currentQuizNumber,
            question: decodeURIComponent(question),
            questionOptions: decodedQuiz,
            myChoiceIndex: null,
            myChoiceStatus: null,
            currentQuizCorrectAnswer: correctAnswer,
            currentQuizCorrectAnswerIndex: correctAnswerIndex,
        };

        copiedArr.push(temp);
        updateCurrentQuizInfo(copiedArr);
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

        const correctQuizAnswer = decodeURIComponent(oneQuiz);

        const correctAnswerIndex = randomIndex + 1;
        setCorrectAnswerIndex(correctAnswerIndex);

        handleSetCurrentQuizInfo(
            currentQuizIndex,
            combinedQuiz,
            correctQuizAnswer,
            correctAnswerIndex,
        );
        return { combinedQuiz };
    };

    /**
     * 정답 확인 시 선택한 항목 상태 변경 함수
     * @param answerType
     * @param selectedQuiz
     * @param index
     */
    const handleChangeQuizCardStatus = (
        answerType: 'true' | 'false' | null,
        selectedQuiz: number,
        index: number,
    ): string => {
        if (answerType !== null && selectedQuiz === index) {
            return answerType;
        }
        if (answerType !== null && selectedQuiz !== index) {
            return 'disabled';
        }
        if (selectedQuiz === index) {
            return 'active';
        }
        return '';
    };

    useEffect(() => {
        const { combinedQuiz } = getRandomQuestion(
            correct_answer,
            incorrect_answers,
        );

        setQuizDetail(combinedQuiz);
    }, [quizIndex]);

    return (
        <>
            <QuizCategory>
                <div>{decodeURIComponent(category)}</div>
                <div>Point : {correctPoint}</div>
            </QuizCategory>
            <QuizPointWrap>
                <QuizSubContents>
                    Question: {currentQuizIndex} / {String(amount)}
                </QuizSubContents>
                <QuizSubContents>{difficulty}</QuizSubContents>
            </QuizPointWrap>
            <QuizHeading>Question {currentQuizIndex}</QuizHeading>
            <QuizContent>{decodeURIComponent(question)}</QuizContent>
            {quizDetail.map((item, index) => (
                <QuizCard
                    className={handleChangeQuizCardStatus(
                        correctAnswerType,
                        selectedAnswer,
                        index,
                    )}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={correctAnswerType !== null}
                >
                    {item}
                </QuizCard>
            ))}
        </>
    );
};

export default QuizDetail;
