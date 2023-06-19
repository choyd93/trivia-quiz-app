import React, { useState } from 'react';

import Header from '@components/Header';
import UseQuizQuery from '@hooks/useQuizQuery';
import UseTimer from '@hooks/useTimer';

import { ContentWrap, QuizContentsWrap } from '@pages/Quiz/styles';
import QuizDetailContainer from '@pages/Quiz/QuizDetail';
import QuizDetailResult from '@pages/Quiz/QuizResult';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
    const { state } = useLocation();
    const { nickName, amount } = state.mySelectQuizOption;

    const { data, isLoading } = UseQuizQuery(state.mySelectQuizOption);
    const { formattedTime, setIsRunning } = UseTimer();

    const [quizIndex, setQuizIndex] = useState(0);
    const [correctPoint, setCorrectPoint] = useState(0);

    if (isLoading) {
        return <>로딩중</>;
    }

    const isQuizChpter = quizIndex >= 0 && quizIndex <= Number(amount) - 1;

    return (
        <>
            <Header />
            {isLoading ? (
                <>로딩중</>
            ) : (
                <QuizContentsWrap>
                    <ContentWrap>
                        {isQuizChpter && data && (
                            <QuizDetailContainer
                                data={data}
                                quizIndex={quizIndex}
                                setQuizIndex={setQuizIndex}
                                setCorrectPoint={setCorrectPoint}
                                correctPoint={correctPoint}
                                amount={amount}
                            />
                        )}
                        {!isQuizChpter && (
                            <QuizDetailResult
                                correctPoint={correctPoint}
                                ResultTime={formattedTime}
                                setIsRunning={setIsRunning}
                                myNickName={nickName}
                                amount={amount}
                            />
                        )}
                    </ContentWrap>
                </QuizContentsWrap>
            )}
        </>
    );
};

export default Quiz;
