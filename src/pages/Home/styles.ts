import styled from 'styled-components';

export const ContentInput = styled.input`
    vertical-align: middle;
    width: 350px;
    height: 56px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    background: none;
    padding: 0 15px;
    color: #545454;
    margin-bottom: 1rem;
`;

export const HomeWrap = styled.div`
    justify-content: center;
    margin: 10px auto;
    width: 350px;
    padding: 0;
    a {
        text-decoration: none;
        color: black;
    }
`;

export const EntranceButton = styled.button`
    background-color: #26a69a;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    display: block;
    padding: 0;
    width: 350px;
    height: 55px;
    max-width: 600px;
    cursor: pointer;
    &:hover {
        background-color: #2bbbad;
    }
`;

export const QuizInputLabel = styled.div`
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    color: #9e9e9e;
    font-size: 0.8rem;
`;

export const QuizSelectBox = styled.select`
    width: 350px;
    height: 56px;
    color: #545454;
    background: none;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 15px;
    margin-bottom: 1rem;
`;

export const QuizAppName = styled.h1`
    text-align: center;
`;
