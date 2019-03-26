import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {

    state = {
        textInput: "",
    }

    onInputChange = (e) => {
        this.setState({ textInput: e.target.value });
    }
    
    onFormSubmit = (e) => {
        if (!this.state.textInput.trim()) return;
        e.preventDefault();
        // send an action to redux, and make changes to the global state
        this.props.saveComment(this.state.textInput);
        // empty text Input after successfully updating state
        this.setState({ textInput: '' }) 
    }

    onFetchClick = () => {
        // dispatch FETCH action
        this.props.fetchComments();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    CommentBox Component
                    <textarea id="commentInput" value={this.state.textInput} onChange={this.onInputChange} rows="3" cols="30" placeholder="Enter a comment"/>
                    <button id="submitBtn">Submit</button>
                </form>
                <button id="fetchBtn" onClick={this.onFetchClick}>Fetch Comments</button>
            </div>
        );
    }
} 

export default connect(null, actions)(CommentBox);