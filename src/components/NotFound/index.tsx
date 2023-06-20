import React from 'react';
import {
    ButtonWrap,
    ContentWrap,
    HomeButton,
    QuizContentCenterWrap,
    QuizContentsWrap,
} from '@pages/Quiz/styles';

const NotFound = () => (
    <QuizContentsWrap>
        <ContentWrap>
            <QuizContentCenterWrap>
                선택하신 문제 타입과 카테고리에 맞는 퀴즈가 없습니다.
            </QuizContentCenterWrap>
            <QuizContentCenterWrap>
                (ture / false 타입을 선택하셨을 경우)
            </QuizContentCenterWrap>
            <ButtonWrap>
                <a href="/">
                    <HomeButton>홈으로 돌아가기</HomeButton>
                </a>
            </ButtonWrap>
        </ContentWrap>
    </QuizContentsWrap>
);

export default NotFound;
