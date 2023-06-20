import { StateCreator } from 'zustand';
import {
    IncorrectNoteInfo,
    IncorrectNoteState,
    IncorrectNoteType,
} from '@modules/types';

const initialState: IncorrectNoteState = {
    currentQuizInfo: [],
    isAgainQuiz: false,
};

/**
 * 다시풀기 및 오답 노트를 위한 슬라이스
 * @param set
 * @constructor
 */
const IncorrectNoteSlice: StateCreator<IncorrectNoteType> = set => ({
    ...initialState,
    updateCurrentQuizInfo: (newQuizInfo: IncorrectNoteInfo[]) =>
        set({ currentQuizInfo: newQuizInfo }),
    updateIsAgainQuiz: (newStatus: boolean) => set({ isAgainQuiz: newStatus }),
    resetCurrentQuizInfo: () => set({ currentQuizInfo: [] }),
});

export default IncorrectNoteSlice;
