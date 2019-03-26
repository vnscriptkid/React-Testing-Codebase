import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapperComponent;

beforeEach(() => {
    wrapperComponent = shallow(<App />);
})

it('should show a comment box', () => {
    // bad approach, as trying to assert about content of other component
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // expect(div.innerHTML).toContain('CommentBox')
    // clean up
    // ReactDOM.unmountComponentAtNode(div);

    // with enzyme for shallow testing
    expect(typeof wrapperComponent.find(CommentBox)).toBe('object');
    expect(Array.isArray(wrapperComponent.find(CommentBox))).toEqual(false);
    expect(wrapperComponent.find(CommentBox)).toHaveLength(1);
    expect(wrapperComponent.find(CommentBox).length).toEqual(1);
});

it('should show Comment List component', () => {
    expect(wrapperComponent.find(CommentList).length).toEqual(1);
})