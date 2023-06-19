import React, { useEffect, useState } from 'react';
import {
    QuizResultCard,
    QuizResultText,
    QuizResultWrap,
} from '@pages/Quiz/QuizResult/styles';

interface QuizDetailResultProps {
    correctPoint: number;
    ResultTime: string;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    myNickName: string;
    amount: string;
}

const QuizDetailResult = ({
    correctPoint,
    ResultTime,
    setIsRunning,
    myNickName,
    amount,
}: QuizDetailResultProps) => {
    const [finalResultTime, setFinalResultTime] = useState('');

    useEffect(() => {
        setFinalResultTime(ResultTime);
        setIsRunning(false);
    }, []);

    return (
        <>
            <QuizResultWrap>{`${myNickName}님의 결과`}</QuizResultWrap>
            <QuizResultCard>
                <QuizResultText>
                    {`경과 시간 : ${finalResultTime}`}
                </QuizResultText>
                <QuizResultText> {`문제 수 : ${amount}`}</QuizResultText>
                <QuizResultText> {`정답 수 : ${correctPoint}`}</QuizResultText>
                <QuizResultText>
                    {`오답 수 : ${Number(amount) - correctPoint}`}
                </QuizResultText>
            </QuizResultCard>
        </>
    );
};

export default QuizDetailResult;
