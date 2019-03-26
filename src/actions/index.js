import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const saveComment = (text) => {
    return {
        type: SAVE_COMMENT,
        payload: text
    }
}

export const fetchComments = () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: res
    }
}