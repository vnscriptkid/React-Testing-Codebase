import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'components/Root';

let wrapperComponent;

function changeInputAndConfirm(wrapper) {
    wrapper.find('textarea#commentInput').simulate('change', { target: { value: 'hello' } });
    wrapper.update();
    // expect(wrapper.state('textInput')).toEqual('hello');
    expect(wrapper.find('textarea#commentInput').prop('value')).toEqual('hello');
}

beforeEach(() => {
    wrapperComponent = mount(<Root><CommentBox /></Root>);    
})

afterEach(() => {
    wrapperComponent.unmount();
})

it('should show a textarea and a submit button and a fetch button', () => {
    expect(wrapperComponent.find('textarea[rows="3"]')).toHaveLength(1);
    expect(wrapperComponent.find('button')).toHaveLength(2);
    expect(wrapperComponent.find('button#submitBtn')).toHaveLength(1);
    expect(wrapperComponent.find('button#fetchBtn')).toHaveLength(1);
})

it('should allow user input textarea and that will trigger local state change', () => {
    // wrapperComponent.find('textarea#commentInput').simulate('change', { target: { value: 'hello' } });
    // wrapperComponent.update();
    // expect(wrapperComponent.state('textInput')).toEqual('hello');
    // expect(wrapperComponent.find('textarea#commentInput').prop('value')).toEqual('hello');
    changeInputAndConfirm(wrapperComponent);
})

it('should submit the form and empty out the input as user click send button', () => {
    // wrapperComponent.find('textarea#commentInput').simulate('change', { target: { value: 'hello' } });
    // wrapperComponent.update();
    // expect(wrapperComponent.state('textInput')).toEqual('hello');
    // expect(wrapperComponent.find('textarea#commentInput').prop('value')).toEqual('hello');
    changeInputAndConfirm(wrapperComponent);
    wrapperComponent.find('form').simulate('submit');
    wrapperComponent.update();
    // expect(wrapperComponent.find(CommentBox).state('textInput')).toEqual('');    
    expect(wrapperComponent.find(CommentBox)).toHaveLength(1);
    expect(wrapperComponent.find('textarea#commentInput').prop('value')).toEqual('');
})