import { ScoreInfo } from '@modules/types';

/**
 * 초를 시:분:초 형식으로 변환하는 함수
 * @param seconds
 */
export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * 총 퀴즈 갯수와 맞은 퀴즈 갯수에 따라 내림차순으로 퀴즈 랭킹 정렬 함수
 * @param score
 */
export const handleSortAllUserScore = (score: ScoreInfo[]) => {
    const sortedScore = score.sort((a, b) => {
        const scoreA = a.correctPoint;
        const scoreB = b.correctPoint;

        if (scoreA !== scoreB) {
            return scoreB - scoreA; // 점수가 높은 순으로 정렬
        }
        return a.amount - b.amount; // 퀴즈 갯수가 적은 순으로 정렬
    });
    return sortedScore;
};
