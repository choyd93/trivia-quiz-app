import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import quizInfoSlice from '@modules/quizInfoSlice';
import ScoreSlice from '@modules/scoreSlice';

import { QuizInfoType, ScoreType } from '@modules/types';

const quizStorageKey = 'QUIZ_STORAGE_KEY';

type StoreState = QuizInfoType & ScoreType;
export const useBoundStore = create<StoreState>()(
    persist(
        (...a) => ({
            ...quizInfoSlice(...a),
            ...ScoreSlice(...a),
        }),
        { name: quizStorageKey },
    ),
);
