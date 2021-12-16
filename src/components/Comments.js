import React from 'react'
import Comment from './Comment'
import NewComment from './NewComment'

const Comments = ({ comments }) => {
    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
            <NewComment />
                </>
    )
}

export default Comments;