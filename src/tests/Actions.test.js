import { setConfig } from '../Redux/Actions';
import { Types } from '../Redux/Actions'

describe('Redux actions', () => {
    it('should create an action to configure settings', () => {
        const config =  {
            generation: 4,
            cellSize: 40,
            boardSize: 400
        };
        const expectedAction = {
            type: Types.SET_CONFIG,
            config
        }
        expect(setConfig(config)).toEqual(expectedAction)
    })
})