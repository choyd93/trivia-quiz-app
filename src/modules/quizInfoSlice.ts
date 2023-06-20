import { StateCreator } from 'zustand';
import { QuizInfoType, QuizState } from '@modules/types';

const initialState: QuizState = {
    nickName: '',
    amount: 0,
    category: 'any',
    difficulty: 'any',
    type: 'any',
    correctPoint: 0,
    totalTime: 0,
};

const QuizInfoSlice: StateCreator<QuizInfoType> = set => ({
    ...initialState,
    updateNickName: nickName => set(() => ({ nickName })),
    updateQuizAmount: amount => set(() => ({ amount })),
    updateCorrectPoint: correctPoint => set(() => ({ correctPoint })),
    updateTotalTime: totalTime => set(() => ({ totalTime })),
    updateAllSelectInfo: (nickName, amount, category, difficulty, type) =>
        set(() => ({
            nickName,
            amount,
            category,
            difficulty,
            type,
        })),
});

export default QuizInfoSlice;
