import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{body: 'comment #1'}, {body: 'comment #2'}]
    })
})

afterEach(() => {
    moxios.uninstall();
})

it('should fetch a list of comments and render the list to the UI', (done) => {
    const wrapper = mount( <Root><App /></Root> );
    expect(wrapper.find('li')).toHaveLength(0);
    wrapper.find('button#fetchBtn').simulate('click');
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li')).toHaveLength(2);
        done();
        wrapper.unmount(); 
    })
})