import React, { useState } from 'react';
import { HomeWrap, NickNameInput } from '@pages/Home/styles';
import { Link } from 'react-router-dom';

const Home = () => {
    const appName = '<Quiz-App />';
    const [myNickname, setMyNickname] = useState('');

    const handleInputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyNickname(e.target.value);
    };

    return (
        <>
            <HomeWrap>
                <h1>{appName}</h1>
            </HomeWrap>
            <HomeWrap>
                <NickNameInput
                    type="string"
                    placeholder="닉네임을 입력하세요."
                    onChange={handleInputNickName}
                    value={myNickname}
                />
            </HomeWrap>
            <HomeWrap>
                {/*<EntranceButton type="button">퀴즈 풀기</EntranceButton>*/}
                <Link to="/quiz">퀴즈 풀기</Link>
            </HomeWrap>
        </>
    );
};

export default Home;
