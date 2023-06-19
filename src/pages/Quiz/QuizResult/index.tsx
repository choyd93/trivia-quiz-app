import React, { useEffect, useMemo, useState } from 'react';
import {
    QuizResultCard,
    QuizResultContents,
    QuizResultContentWrap,
    QuizResultText,
    QuizResultTextWrap,
    QuizResultWrap,
} from '@pages/Quiz/QuizResult/styles';
import { ButtonWrap, HomeButton } from '@pages/Quiz/styles';
import MyChart from '@components/Chart';

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
    const inCorrectPoint = Number(amount) - correctPoint;

    const handleSetChart = (correct: number, inCorrect: number) => {
        const result = [
            {
                id: '정답 수',
                label: '정답 수',
                value: Number(correct),
                color: 'hsl(195, 70%, 50%)',
            },
            {
                id: '오답 수',
                label: '오답 수',
                value: Number(inCorrect),
                color: 'hsl(301, 70%, 50%)',
            },
        ];
        return result;
    };

    const chartResult = useMemo(
        () => handleSetChart(correctPoint, inCorrectPoint),
        [correctPoint],
    );

    useEffect(() => {
        setFinalResultTime(ResultTime);
        setIsRunning(false);
    }, []);

    return (
        <>
            <QuizResultWrap>{`${myNickName}님의 결과`}</QuizResultWrap>
            <QuizResultCard>
                <QuizResultContentWrap>
                    <QuizResultContents>
                        <QuizResultTextWrap>
                            <QuizResultText>{`경과 시간 : ${finalResultTime}`}</QuizResultText>
                            <QuizResultText>{`문제 수 : ${amount}`}</QuizResultText>
                            <QuizResultText>{`정답 수 : ${correctPoint}`}</QuizResultText>
                            <QuizResultText>{`오답 수 : ${inCorrectPoint}`}</QuizResultText>
                        </QuizResultTextWrap>
                    </QuizResultContents>
                    <QuizResultContents>
                        <MyChart data={chartResult} />
                    </QuizResultContents>
                </QuizResultContentWrap>
            </QuizResultCard>
            <ButtonWrap>
                <a href="/">
                    <HomeButton>홈으로 돌아가기</HomeButton>
                </a>
            </ButtonWrap>
        </>
    );
};

export default QuizDetailResult;
