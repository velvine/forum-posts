import React from "react"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ForumPosts = ({ post }) => {
    const navigate = useNavigate()

    return (
        <Card style={{ margin: '8px' }}>
            <Card.Body>
                <Card.Title>
                    {post.title}
                </Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Button onClick={() => {
                    navigate(`/post/${post.id}`)
                }}>Comments</Button>
                <CopyToClipboard text={`${window.location.href}post/${post.id}`}>
                    <Button style={{margin :'8px'}}>Copy url to clipboard</Button>
                </CopyToClipboard>
            </Card.Body>
        </Card>

    )

}
export default ForumPosts