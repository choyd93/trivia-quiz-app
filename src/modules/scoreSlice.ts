import { StateCreator } from 'zustand';
import { ScoreInfo, ScoreState, ScoreType } from '@modules/types';

const initialState: ScoreState = {
    allTimeScore: [],
};

const ScoreSlice: StateCreator<ScoreType> = set => ({
    ...initialState,
    updateAllTimeScore: (newScore: ScoreInfo[]) =>
        set({ allTimeScore: newScore }),
});

export default ScoreSlice;
