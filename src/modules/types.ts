export interface QuizState {
    nickName: string;
    amount: number;
    category: string;
    difficulty: string;
    type: string;
    correctPoint: number;
    totalTime: number;
}

export interface QuizActions {
    updateNickName: (nickName: string) => void;
    updateQuizAmount: (amount: number) => void;
    updateCorrectPoint: (correctPoint: number) => void;
    updateTotalTime: (totalTime: number) => void;
    updateAllSelectInfo: (
        nickName: string,
        amount: number,
        category: string,
        difficulty: string,
        type: string,
    ) => void;
}

export type QuizInfoType = QuizState & QuizActions;

export interface ScoreInfo {
    nickName: string;
    amount: number;
    correctPoint: number;
    totalTime: number;
}
export interface ScoreActions {
    updateAllTimeScore: (newScore: ScoreInfo[]) => void;
}

export interface ScoreState {
    allTimeScore: ScoreInfo[];
}

export type ScoreType = ScoreState & ScoreActions;
