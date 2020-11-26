import { Types } from './Actions'

export const InitialState = {
    config: {
        generation: 4,
        cellSize: 40,
        boardSize: 400
    }
}

export default function reducer (state = InitialState, action) {
    switch (action.type) {
        case Types.SET_CONFIG:
            return {
                ...state,
                ...{ config: action.config }
            }
        default:
            return state
    }
}