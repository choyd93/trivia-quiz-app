import styled from 'styled-components';

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
    &.false {
        color: black;
        background: #ff7274;
        pointer-events: none;
    }
    &.true {
        color: black;
        background-color: rgb(24, 226, 140);
        pointer-events: none;
    }
    &.disabled {
        pointer-events: none;
    }
`;

export const QuizCategory = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
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

export const QuizSubContents = styled.div`
    font-size: 1.2rem;
    color: #9e9e9e;
`;

export const QuizContent = styled.div`
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const NextQuizButton = styled.button`
    text-decoration: none;
    color: #fff;
    text-align: center;
    letter-spacing: 0.5px;
    transition: 0.2s ease-out;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &.next {
        background-color: #1f1c8b;
        &:hover {
            background-color: #342ff8;
        }
    }
    &.check {
        background-color: #26a69a;
        &:hover {
            background-color: #2bbbad;
        }
    }
`;

export const NextQuizButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const QuizWrap = styled.div`
    height: 100vh;
`