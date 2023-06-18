import Header from '@components/Header';
import Detail from '@pages/Quiz/detail';
import UseQuizQuery from '@hooks/useQuizQuery';

const Quiz = () => {
    const { data, isLoading } = UseQuizQuery();

    if (isLoading) {
        return <>로딩중</>;
    }

    return (
        <>
            <Header />
            {data && <Detail data={data.results[1]} />}
        </>
    );
};

export default Quiz;
