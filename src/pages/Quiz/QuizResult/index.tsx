import React, { useEffect, useState } from 'react';

import { useBoundStore } from '@modules/store';

import QuizResultCard from '@components/Card/quizResultCard';
import AllTimeResultCard from '@components/Card/allTimeResultCard';

import { handleSortAllUserScore } from '@utils/utils';

import { ButtonWrap, HomeButton } from '@pages/Quiz/styles';
import { QuizResultWrap } from '@pages/Quiz/QuizResult/styles';
import IncorrectAnswerNoteCard from '@components/Card/incorrectAnswerNoteCard';

interface QuizDetailResultProps {
    correctPoint: number;
    ResultTime: string;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    myNickName: string;
}

const QuizDetailResult = ({
    correctPoint,
    ResultTime,
    setIsRunning,
    myNickName,
}: QuizDetailResultProps) => {
    const {
        nickName,
        amount,
        totalTime,
        allTimeScore,
        updateAllTimeScore,
        currentQuizInfo,
        // updateIsAgainQuiz,
        resetCurrentQuizInfo,
    } = useBoundStore();
    const [finalResultTime, setFinalResultTime] = useState('');

    const inCorrectPoint = Number(amount) - correctPoint;

    /**
     * 역대 점수 정보 추가 함수
     */
    const handleSaveScore = () => {
        const arr = { nickName, amount, correctPoint, totalTime };
        const copyOldScore = [...allTimeScore];
        copyOldScore.push(arr);
        const sortedAllUserScore = handleSortAllUserScore(copyOldScore);

        updateAllTimeScore(sortedAllUserScore);
    };

    // const handleAgainQuiz = () => {
    //     updateIsAgainQuiz(true);
    // };

    useEffect(() => {
        setFinalResultTime(ResultTime);
        setIsRunning(false);
        handleSaveScore();
        console.log('currentQuizInfo 11111111 : ', currentQuizInfo);
    }, []);

    return (
        <>
            <QuizResultWrap>{`${myNickName}님의 결과`}</QuizResultWrap>
            <QuizResultCard
                finalResultTime={finalResultTime}
                amount={amount}
                correctPoint={correctPoint}
                inCorrectPoint={inCorrectPoint}
            />
            <IncorrectAnswerNoteCard />
            <AllTimeResultCard />
            <ButtonWrap>
                <a href="/">
                    <HomeButton onClick={() => resetCurrentQuizInfo()}>
                        홈으로 돌아가기
                    </HomeButton>
                </a>
            </ButtonWrap>
            {/*<ButtonWrap>*/}
            {/*    <a href="quiz">*/}
            {/*        <HomeButton onClick={() => handleAgainQuiz}>*/}
            {/*            다시 풀기*/}
            {/*        </HomeButton>*/}
            {/*    </a>*/}
            {/*</ButtonWrap>*/}
        </>
    );
};

export default QuizDetailResult;
