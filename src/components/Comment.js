import React from 'react'
import { Card } from 'react-bootstrap'
const Comment = ({ comment }) => {
    if (!comment) return null;
    return (
        <Card style={{ margin: '8px' }}>
            <Card.Body>
                <Card.Title>
                    {comment.name}
                </Card.Title>
                <Card.Text>
                    {comment.body}
                </Card.Text>
                <Card.Subtitle>
                    {comment.email}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Comment;