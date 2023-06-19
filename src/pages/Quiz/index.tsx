import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@components/Header';
import UseQuizQuery from '@hooks/useQuizQuery';
import UseTimer from '@hooks/useTimer';

import {
    ButtonWrap,
    ContentWrap,
    HomeButton,
    QuizContentCenterWrap,
    QuizContentsWrap,
} from '@pages/Quiz/styles';

import QuizDetailContainer from '@pages/Quiz/QuizDetail';
import QuizDetailResult from '@pages/Quiz/QuizResult';

const Quiz = () => {
    const { state } = useLocation();
    const { nickName, amount, difficulty } = state.mySelectQuizOption;

    const { data, isLoading } = UseQuizQuery(state.mySelectQuizOption);
    const { formattedTime, setIsRunning } = UseTimer();

    const [quizIndex, setQuizIndex] = useState(0);
    const [correctPoint, setCorrectPoint] = useState(0);

    const isQuizChpter = quizIndex >= 0 && quizIndex <= Number(amount) - 1;

    return (
        <>
            <Header />
            {isLoading ? (
                <>로딩중</>
            ) : data?.results.length === 0 ? (
                <QuizContentsWrap>
                    <ContentWrap>
                        <QuizContentCenterWrap>
                            선택하신 문제 타입과 카테고리에 맞는 퀴즈가
                            없습니다.
                        </QuizContentCenterWrap>
                        <QuizContentCenterWrap>
                            (ture / false 타입을 선택하셨을 경우)
                        </QuizContentCenterWrap>
                        <ButtonWrap>
                            <a href="/">
                                <HomeButton>홈으로 돌아가기</HomeButton>
                            </a>
                        </ButtonWrap>
                    </ContentWrap>
                </QuizContentsWrap>
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
