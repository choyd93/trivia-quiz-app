import { useBoundStore } from '@modules/store';

import { QuizResultWrap } from '@pages/Quiz/QuizResult/styles';
import {
    AllTimeResultCardWrap,
    ContentTable,
    ContentWrap,
    TableContentWrap,
    TableText,
    TableTitle,
} from '@components/Card/styles';

const AllTimeResultCard = () => {
    const allUserScore = useBoundStore(state => state.allTimeScore);

    return (
        <>
            <QuizResultWrap>역대 점수 랭킹</QuizResultWrap>
            <AllTimeResultCardWrap>
                <TableTitle>
                    <TableText>등수</TableText>
                    <TableText>닉네임</TableText>
                    <TableText>문제 수</TableText>
                    <TableText>맞은 갯수</TableText>
                    {/*<TableText>경과 시간</TableText>*/}
                </TableTitle>
                <TableContentWrap>
                    {allUserScore.map((item, index) => (
                        <ContentWrap>
                            <ContentTable>{index + 1}</ContentTable>
                            <ContentTable>{item.nickName}</ContentTable>
                            <ContentTable>{item.amount}</ContentTable>
                            <ContentTable>{item.correctPoint}</ContentTable>
                            {/*<ContentTable>{item.totalTime}</ContentTable>*/}
                        </ContentWrap>
                    ))}
                </TableContentWrap>
            </AllTimeResultCardWrap>
        </>
    );
};

export default AllTimeResultCard;
