import { RootState } from "../../utils/types";

export const strokesLengthSelector = (state:RootState) => state.strokes.length

export const strokesSelector = (state: RootState) => state.strokes