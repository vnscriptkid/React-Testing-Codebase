import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('should handle action with type of SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'hey' };
    const result = commentsReducer([], action);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toHaveLength(1);
    expect(result).toContain(action.payload); 
});

it('should handle the case of action with falsy type', () => {
    const action = { type: 'hack', payload: 'hey' };
    const result = commentsReducer([], action);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toHaveLength(0);
})