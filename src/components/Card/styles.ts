import styled from 'styled-components';

export const QuizResultCardWrap = styled.div`
    box-shadow: 0 0.25rem 1rem 0 #2e385614;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    display: flex;
    width: 57%;
    min-width: 330px;
    justify-content: center;
    margin: 0 auto;
`;

export const IncorrectNoteCardWrap = styled(QuizResultCardWrap)`
    flex-direction: column;
`;

export const IncorrectCardWrap = styled(QuizResultCardWrap)`
    width: 100% !important;
`;

export const QuizResultText = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const QuizResultContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const QuizResultContents = styled.div`
    flex: 1;
`;
export const QuizResultTextWrap = styled.div`
    padding-top: 2rem;
`;

export const AllTimeResultCardWrap = styled.div`
    box-shadow: 0 0.25rem 1rem 0 #2e385614;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    width: 57%;
    min-width: 330px;
    margin: 0 auto;
`;

export const TableTitle = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid darkgrey;
`;

export const IncorrectTableTitle = styled(TableTitle)`
    width: 100% !important;
`;

export const TableContentWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TableText = styled.div`
    flex: 1;
    text-align: center;
`;

export const ContentTable = styled.div`
    flex: 1;
    text-align: center;
    padding-bottom: 0.8rem;
`;

export const ColorContentTable = styled(ContentTable)<{ isCorrect: boolean }>`
    color: ${props => (props.isCorrect ? 'blue' : 'red')};
`;

export const ContentWrap = styled.div`
    display: flex;
`;
