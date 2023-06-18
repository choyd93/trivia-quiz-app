import React, { useState } from 'react';

import Header from '@components/Header';
import UseQuizQuery from '@hooks/useQuizQuery';
import UseTimer from '@hooks/useTimer';

import { ContentWrap } from '@pages/Quiz/styles';
import QuizDetailContainer from '@pages/Quiz/QuizDetail';
import QuizDetailResult from '@pages/Quiz/QuizResult';

const Quiz = () => {
    const { data, isLoading } = UseQuizQuery();
    const [quizIndex, setQuizIndex] = useState(0);
    const [correctPoint, setCorrectPoint] = useState(0);
    const { formattedTime, setIsRunning } = UseTimer();

    if (isLoading) {
        return <>로딩중</>;
    }

    const isQuizChpter = quizIndex >= 0 && quizIndex < 10;

    return (
        <>
            <Header />
            <ContentWrap>
                {isQuizChpter && data && (
                    <QuizDetailContainer
                        data={data}
                        quizIndex={quizIndex}
                        setQuizIndex={setQuizIndex}
                        setCorrectPoint={setCorrectPoint}
                        correctPoint={correctPoint}
                    />
                )}
                {!isQuizChpter && (
                    <QuizDetailResult
                        correctPoint={correctPoint}
                        ResultTime={formattedTime}
                        setIsRunning={setIsRunning}
                    />
                )}
            </ContentWrap>
        </>
    );
};

export default Quiz;
