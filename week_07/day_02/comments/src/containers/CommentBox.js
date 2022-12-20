import CommentList from '../components/CommentList';
import {useState} from 'react';

const CommentBox = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'R Henry',
            text: 'Great food!'
        },
        {
            id: 2,
            author: 'V Gibson',
            text: 'Soggy chips!'
        }
    ]);

    return (
        <>
            <h1>Comments</h1>
            <CommentList comments={comments} />
        </>
        
    );
};

export default CommentBox;