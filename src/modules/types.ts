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

export interface IncorrectNoteInfo {
    quizIndex: number;
    question: string;
    questionOptions: string[];
    myChoiceIndex: number | null; // 내가 선택한 정답의 index
    myChoiceStatus: boolean | null; // 내가 선택한 정답의 상태 (정답/오답)

    currentQuizCorrectAnswer: string; // 현재 퀴즈의 정답
    currentQuizCorrectAnswerIndex: number; // 현재 퀴즈의 정답 index
}

export interface IncorrectNoteActions {
    updateCurrentQuizInfo: (newQuizInfo: IncorrectNoteInfo[]) => void;
    updateIsAgainQuiz: (newStatus: boolean) => void;
    resetCurrentQuizInfo: () => void;
}

export interface IncorrectNoteState {
    currentQuizInfo: IncorrectNoteInfo[];
    isAgainQuiz: boolean;
}
export type IncorrectNoteType = IncorrectNoteState & IncorrectNoteActions;
