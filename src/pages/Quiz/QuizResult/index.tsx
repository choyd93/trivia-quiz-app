import React, { useEffect, useState } from 'react';

import { useBoundStore } from '@modules/store';

import { ButtonWrap, HomeButton } from '@pages/Quiz/styles';
import { QuizResultWrap } from '@pages/Quiz/QuizResult/styles';
import QuizResultCard from '@components/Card/quizResultCard';
import AllTimeResultCard from '@components/Card/allTimeResultCard';

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
    const [finalResultTime, setFinalResultTime] = useState('');
    const { nickName, amount, totalTime, allTimeScore, updateAllTimeScore } =
        useBoundStore();
    const inCorrectPoint = Number(amount) - correctPoint;

    /**
     * 역대 점수 정보 추가 함수
     */
    const handleSaveScore = () => {
        const arr = { nickName, amount, correctPoint, totalTime };
        const copyOldScore = [...allTimeScore];
        copyOldScore.push(arr);
        updateAllTimeScore(copyOldScore);
    };

    useEffect(() => {
        setFinalResultTime(ResultTime);
        setIsRunning(false);
        handleSaveScore();
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
            <AllTimeResultCard />
            <ButtonWrap>
                <a href="/">
                    <HomeButton>홈으로 돌아가기</HomeButton>
                </a>
            </ButtonWrap>
        </>
    );
};

export default QuizDetailResult;
