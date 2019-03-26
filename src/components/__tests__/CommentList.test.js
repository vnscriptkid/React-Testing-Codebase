import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root';
import CommentList from 'components/CommentList';

let wrapper;
let comments;

beforeEach(() => {
    comments = ['one', 'two'];
    wrapper = mount(<Root initialState={{comments}}><CommentList /></Root>);
});

afterEach(() => {
    wrapper.unmount();
})

it('should show up correctly a list of comments from store', () => {
    
    expect(wrapper.find('li')).toHaveLength(comments.length);
    expect(wrapper.render().find('li').length).toEqual(2) ;
    expect(wrapper.render().find('li:nth-of-type(1)').text()).toEqual(comments[0]);
    expect(wrapper.render().find('li:nth-of-type(2)').text()).toEqual(comments[1]);
    expect(wrapper.text()).toContain(comments[0]);
    expect(wrapper.text()).toContain(comments[1]);
})