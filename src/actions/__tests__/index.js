import { saveComment } from 'actions/index';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment action creator', () => {
    it('should produce an object with correct type and payload', () => {
        const action = saveComment('hey');
        expect(typeof action).toEqual('object');
        expect(action).toHaveProperty('type', SAVE_COMMENT);
        expect(action).toHaveProperty('payload', 'hey');
        expect(Object.keys(action).length).toEqual(2);
    })
})