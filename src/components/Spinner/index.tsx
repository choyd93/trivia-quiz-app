import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoadingWrap } from '@components/Spinner/styles';

const Loading = () => (
    <LoadingWrap>
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible
        />
    </LoadingWrap>
);

export default Loading;
