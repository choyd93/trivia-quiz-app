import { useBoundStore } from '@modules/store';

import {
    ColorContentTable,
    ContentTable,
    ContentWrap,
    IncorrectNoteCardWrap,
    IncorrectTableTitle,
    TableContentWrap,
    TableText,
} from '@components/Card/styles';
import { QuizResultWrap } from '@pages/Quiz/QuizResult/styles';

const IncorrectAnswerNoteCard = () => {
    const { currentQuizInfo } = useBoundStore();

    return (
        <>
            <QuizResultWrap>오답 노트</QuizResultWrap>
            <IncorrectNoteCardWrap>
                <IncorrectTableTitle>
                    <TableText>번호</TableText>
                    <TableText>정답</TableText>
                    <TableText>나의 선택</TableText>
                    <TableText>정답 여부</TableText>
                </IncorrectTableTitle>
                <TableContentWrap>
                    {currentQuizInfo.map((item, index) => (
                        <ContentWrap>
                            <ContentTable>{index + 1}</ContentTable>
                            <ContentTable>
                                {item.currentQuizCorrectAnswer}
                            </ContentTable>
                            <ContentTable>{item.myChoiceIndex}</ContentTable>
                            <ColorContentTable
                                isCorrect={item.myChoiceStatus !== null}
                            >
                                {item.myChoiceStatus ? '정답' : '오답'}
                            </ColorContentTable>
                        </ContentWrap>
                    ))}
                </TableContentWrap>
            </IncorrectNoteCardWrap>
        </>
    );
};

export default IncorrectAnswerNoteCard;
