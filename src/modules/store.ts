import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import QuizInfoSlice from '@modules/Slices/quizInfoSlice';
import ScoreSlice from '@modules/Slices/scoreSlice';
import IncorrectNoteSlice from '@modules/Slices/IncorrectNoteSlice';

import { IncorrectNoteType, QuizInfoType, ScoreType } from '@modules/types';

const quizStorageKey = 'QUIZ_STORAGE_KEY';

type StoreState = QuizInfoType & ScoreType & IncorrectNoteType;
export const useBoundStore = create<StoreState>()(
    persist(
        (...a) => ({
            ...QuizInfoSlice(...a),
            ...ScoreSlice(...a),
            ...IncorrectNoteSlice(...a),
        }),
        { name: quizStorageKey },
    ),
);
