import { StateCreator } from 'zustand';
import { ScoreInfo, ScoreState, ScoreType } from '@modules/types';

const initialState: ScoreState = {
    allTimeScore: [],
};

/**
 * 역대 점수 랭킹
 * @param set
 * @constructor
 */
const ScoreSlice: StateCreator<ScoreType> = set => ({
    ...initialState,
    updateAllTimeScore: (newScore: ScoreInfo[]) =>
        set({ allTimeScore: newScore }),
});

export default ScoreSlice;
