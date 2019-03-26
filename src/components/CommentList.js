import React from 'react';
import {connect} from 'react-redux';

let key = 0;

class CommentList extends React.Component {

    renderCommentList = () => {
        return this.props.comments.map(comment => <li key={key++}>{comment}</li>)
    }
    
    render() {
        return (
            <div>
                CommentList Component
                {this.renderCommentList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);