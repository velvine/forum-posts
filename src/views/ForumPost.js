import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import Spinner from '../components/Spinner';

const ForumPost = () => {
    const { id } = useParams()
    console.log(id)
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getPost = async () => {
        setIsLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(res.data);
        setIsLoading(false);
    }

    const getComments = async () => {
        setIsLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        setComments(res.data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (id) {
            getPost();
            getComments();
        }
    }, [id]);

    console.log(comments)

    return (
        <>
            {isLoading ? <Spinner /> :
                <Card style={{ marginBottom: '8px' }}>
                    <Card.Body>
                        {post && (<>
                            <Card.Title>
                                {post.title}
                            </Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </>)}
                        <h3>Comments</h3>
                        <Comments comments={comments} /> 
                    </Card.Body>
                </Card>
            }
        </>
    )
}

export default ForumPost;