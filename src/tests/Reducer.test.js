import reducers from '../Redux/Reducers'
import { Types } from '../Redux/Actions'

describe('Redux reducers', () => {
    
    it('should return the initial state', () => {
        expect(reducers(undefined, {})).toEqual({
            config: {
                generation: 4,
                cellSize: 40,
                boardSize: 400
            }
        })
    })  

    it('should handle SET_CONFIG', () => {
        expect(
            reducers([], {
                type: Types.SET_CONFIG,
                config: [{
                    generation: 4,
                    cellSize: 40,
                    boardSize: 400
                }]
            })
        ).toEqual(
            {
                config: [{
                    generation: 4,
                    cellSize: 40,
                    boardSize: 400
                }]
            }
        )
    })

})