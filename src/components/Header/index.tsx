import IdeaIcon from '@assets/icons/icons';
import {
    GitPageButton,
    HeaderWrap,
    HomeTitle,
    IconWrap,
} from '@components/Header/styles';

const Header = () => {
    const gitPageTitle = '<> GITHUB';

    return (
        <HeaderWrap>
            <a href="/">
                <IconWrap>
                    <IdeaIcon />
                </IconWrap>
                <HomeTitle>Simple Quiz</HomeTitle>
            </a>
            <GitPageButton
                href="https://github.com/choyd93/trivia-quiz-app"
                target="_blank"
            >
                {gitPageTitle}
            </GitPageButton>
        </HeaderWrap>
    );
};

export default Header;
