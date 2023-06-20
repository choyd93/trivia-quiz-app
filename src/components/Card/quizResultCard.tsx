import MyChart from '@components/Chart';

import {
    QuizResultCardWrap,
    QuizResultContents,
    QuizResultContentWrap,
    QuizResultText,
    QuizResultTextWrap,
} from '@components/Card/styles';
import { useMemo } from 'react';

interface QuizResultCardProps {
    finalResultTime: string;
    amount: number;
    correctPoint: number;
    inCorrectPoint: number;
}

const QuizResultCard = ({
    finalResultTime,
    amount,
    correctPoint,
    inCorrectPoint,
}: QuizResultCardProps) => {
    /**
     * 차트 데이터 가공 함수
     * @param correct
     * @param inCorrect
     */
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
    return (
        <QuizResultCardWrap>
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
        </QuizResultCardWrap>
    );
};

export default QuizResultCard;
