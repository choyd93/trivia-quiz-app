import { Link } from 'react-router-dom';
import IdeaIcon from '@assets/icons/icons';
import {
    GitPageButton,
    HeaderWrap,
    HomeTitle,
} from '@components/Header/styles';

const Header = () => {
    const gitPageTitle = '<> Github';

    return (
        <HeaderWrap>
            <Link to="/">
                <IdeaIcon />
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
