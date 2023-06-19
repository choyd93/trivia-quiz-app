import IdeaIcon from '@assets/icons/icons';
import {
    GitPageButton,
    HeaderWrap,
    HomeALink,
    HomeTitle,
    IconWrap,
} from '@components/Header/styles';

interface HeaderProps {
    isLoading: boolean;
}
const Header = ({ isLoading }: HeaderProps) => {
    const gitPageTitle = '<> GITHUB';

    return (
        <HeaderWrap isLoading={isLoading}>
            <HomeALink href="/">
                <IconWrap>
                    <IdeaIcon />
                </IconWrap>
                <HomeTitle>Simple Quiz</HomeTitle>
            </HomeALink>
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
