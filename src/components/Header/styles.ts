import styled from 'styled-components';

export const HeaderWrap = styled.header<{ isLoading: boolean }>`
    background-color: white;
    border-bottom: 0.0625rem solid var(--gray-300-gray-800);
    color: var(--gray-800-gray-100);
    display: flex;
    justify-content: space-between;
    height: 4rem;
    border-bottom: 0.0625rem solid #eeeff4;
    position: ${props => (props.isLoading ? 'initial' : 'fixed')};
    z-index: 100;
    width: 100%;
`;

export const HomeALink = styled.a`
    padding-left: 1rem;
`;

export const HomeTitle = styled.div`
    display: inline-block;
    font-weight: bold;
    color: #2e3856;
    font-size: 1.5rem;
    padding-left: 0.3rem;
`;

export const GitPageButton = styled.a`
    text-decoration: none;
    font-size: 0.9rem;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: 0.5px;
    transition: 0.2s ease-out;
    cursor: pointer;
    margin: 23px 25px 0 20px;
    width: 130px;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 39px;
    &:hover {
        background-color: #2bbbad;
    }
`;

export const IconWrap = styled.div`
    display: inline-block;
    padding-top: 10px;
`;
