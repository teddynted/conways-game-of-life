import { Types } from './Actions'

export const InitialState = {
    config: {
        generation: 4,
        cellSize: 40,
        boardSize: 400
    },
    isLoading: false
}

export default function reducer (state = InitialState, action) {
    switch (action.type) {
        case Types.SET_CONFIG:
            return {
                ...state,
                ...{ config: action.config }
            }
        case Types.SET_LOADER:
            return {
                ...state,
                ...{ isLoading: action.isLoading }
            }
        default:
            return state
    }
}