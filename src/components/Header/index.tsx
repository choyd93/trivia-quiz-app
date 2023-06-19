import { Link } from 'react-router-dom';
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
            <Link to="/">
                <IconWrap>
                    <IdeaIcon />
                </IconWrap>
                <HomeTitle>Trivia Quiz</HomeTitle>
            </Link>
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
