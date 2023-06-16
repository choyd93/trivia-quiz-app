import styled from 'styled-components';

export const HeaderWrap = styled.header`
    background-color: var(--gray-100-twilight-900);
    border-bottom: 0.0625rem solid var(--gray-300-gray-800);
    color: var(--gray-800-gray-100);
    display: flex;
    justify-content: space-between;
    height: 4rem;
    padding: 0 1rem;
    border-bottom: 0.0625rem solid #eeeff4;
`;

export const HomeTitle = styled.div`
    display: inline-block;
`;

export const GitPageButton = styled.a`
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: 0.5px;
    transition: 0.2s ease-out;
    cursor: pointer;
    margin: 23px 0 0 20px;
    width: 130px;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
`;
