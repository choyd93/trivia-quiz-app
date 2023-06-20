import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@components/Header';
import Loading from '@components/Spinner';

import UseQuizQuery from '@hooks/useQuizQuery';
import UseTimer from '@hooks/useTimer';

import QuizDetailContainer from '@pages/Quiz/QuizDetail';
import QuizDetailResult from '@pages/Quiz/QuizResult';

import { ContentWrap, QuizContentsWrap } from '@pages/Quiz/styles';
import NotFound from '@components/NotFound';

const Quiz = () => {
    const { state } = useLocation();
    const { nickName, amount, difficulty } = state.mySelectQuizOption;

    // const { currentQuizInfo, isAgainQuiz, resetCurrentQuizInfo } = useBoundStore();

    // const { resetCurrentQuizInfo } = useBoundStore();

    const { data, isLoading } = UseQuizQuery(state.mySelectQuizOption);
    const { formattedTime, setIsRunning } = UseTimer();

    const [quizIndex, setQuizIndex] = useState(0);
    const [correctPoint, setCorrectPoint] = useState(0);

    const isQuizChpter = quizIndex >= 0 && quizIndex <= Number(amount) - 1;

    console.log('data : ', data);
    // console.log('isAgainQuiz 777; ', isAgainQuiz);
    // console.log('currentQuizInfo 777; ', currentQuizInfo);

    return (
        <>
            <Header isLoading={isLoading} />
            {isLoading ? (
                <Loading />
            ) : data?.results.length === 0 ? (
                <NotFound />
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
                                difficulty={difficulty}
                            />
                        )}
                        {!isQuizChpter && (
                            <QuizDetailResult
                                correctPoint={correctPoint}
                                ResultTime={formattedTime}
                                setIsRunning={setIsRunning}
                                myNickName={nickName}
                            />
                        )}
                    </ContentWrap>
                </QuizContentsWrap>
            )}
        </>
    );
};
export default Quiz;
