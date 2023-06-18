import styled from 'styled-components';

export const ContentWrap = styled.section`
    background-color: #f6f7fb;
    margin: 0 auto;
    max-width: 54.5625rem;
    padding: 2.5rem;
    position: relative;
    height: 1200px;
`;

export const QuizCard = styled.button`
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 10px 0;
    box-shadow: 0 0.25rem 1rem 0 #2e385614;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    &:hover {
        background-color: #ebeced;
    }
    &.active {
        background-color: #9ba5af;
    }
`;

export const QuizCategory = styled.div`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`;

export const QuizHeading = styled.h1`
    text-align: center;
    font-size: 2rem;
`;

export const QuizPointWrap = styled.div`
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
`;

export const QuizContent = styled.div`
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const NextQuizButton = styled.button`
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: 0.5px;
    transition: 0.2s ease-out;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #2bbbad;
    }
`;

export const NextQuizButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;
