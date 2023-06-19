import React, { useState } from 'react';
import {
    ContentInput,
    EntranceButton,
    HomeWrap,
    QuizInputLabel,
    QuizSelectBox,
} from '@pages/Home/styles';
import { categories } from '@assets/data';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const appName = '<Quiz-App />';
    const navigate = useNavigate();

    const [mySelectQuizOption, setMySelectQuizOption] = useState({
        nickName: '',
        amount: '10',
        category: 'any',
        difficulty: 'any',
        type: 'any',
    });

    const handleChangeSelectQuizOption = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    ) => {
        setMySelectQuizOption({
            ...mySelectQuizOption,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/quiz', {
            state: { mySelectQuizOption },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <HomeWrap>
                <h1>{appName}</h1>
            </HomeWrap>
            <HomeWrap>
                <QuizInputLabel>닉네임:</QuizInputLabel>
                <ContentInput
                    name="nickName"
                    type="string"
                    placeholder="닉네임을 입력하세요."
                    onChange={handleChangeSelectQuizOption}
                    value={mySelectQuizOption.nickName}
                />
                <QuizInputLabel>퀴즈 수: </QuizInputLabel>
                <ContentInput
                    name="amount"
                    type="number"
                    placeholder="10"
                    min="1"
                    onChange={handleChangeSelectQuizOption}
                    value={mySelectQuizOption.amount}
                />
                <QuizInputLabel>카테고리:</QuizInputLabel>
                <QuizSelectBox
                    name="category"
                    className="select"
                    onChange={handleChangeSelectQuizOption}
                    value={mySelectQuizOption.category}
                >
                    <option value="any">랜덤 카테고리</option>
                    {categories.map((category, index) => (
                        <option value={index + 9}>{category}</option>
                    ))}
                </QuizSelectBox>
                <QuizInputLabel>난이도:</QuizInputLabel>
                <QuizSelectBox
                    name="difficulty"
                    className="select"
                    onChange={handleChangeSelectQuizOption}
                    value={mySelectQuizOption.difficulty}
                >
                    <option value="any">랜덤 난이도</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </QuizSelectBox>
                <QuizInputLabel>문제 타입:</QuizInputLabel>
                <QuizSelectBox
                    name="type"
                    className="select"
                    onChange={handleChangeSelectQuizOption}
                    value={mySelectQuizOption.type}
                >
                    <option value="any">랜덤 문제 타입</option>
                    <option value="multiple">다중 선택</option>
                    <option value="boolean">true / false</option>
                </QuizSelectBox>
            </HomeWrap>
            <HomeWrap>
                <EntranceButton type="submit">퀴즈 풀기</EntranceButton>
            </HomeWrap>
        </form>
    );
};

export default Home;
