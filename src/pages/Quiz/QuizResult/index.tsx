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
}

const QuizDetailResult = ({
    correctPoint,
    ResultTime,
    setIsRunning,
}: QuizDetailResultProps) => {
    const [finalResultTime, setFinalResultTime] = useState('');

    useEffect(() => {
        setFinalResultTime(ResultTime);
        setIsRunning(false);
    }, []);

    return (
        <>
            <QuizResultWrap>Result</QuizResultWrap>
            <QuizResultCard>
                <QuizResultText> 경과 시간 : {finalResultTime}</QuizResultText>
                <QuizResultText> 정담 수 : {correctPoint}</QuizResultText>
                <QuizResultText> 오답 수 : {10 - correctPoint}</QuizResultText>
            </QuizResultCard>
        </>
    );
};

export default QuizDetailResult;
