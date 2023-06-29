import styled from 'styled-components';

export const ContentWrap = styled.section`
    background-color: #f6f7fb;
    margin: 0 auto;
    max-width: 54.5625rem;
    padding: 2.5rem;
    position: relative;
    height: 100vh;`;

export const QuizContentsWrap = styled.section`
    background-color: #f6f7fb;
    padding-top: 100px;
    width: 100%;
`;

export const QuizContentCenterWrap = styled.div`
    text-align: center;
    padding-bottom: 0.5rem;
    color: #9e9e9e;
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    a {
        text-decoration: none;
    }
`;

export const HomeButton = styled.button`
    background-color: #26a69a;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    display: block;
    padding: 0;
    width: 200px;
    height: 55px;
    max-width: 600px;
    cursor: pointer;
    &:hover {
        background-color: #2bbbad;
    }
`;
