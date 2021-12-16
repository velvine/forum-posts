import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import ForumPosts from '../components/ForumPosts';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import NewPost from '../components/NewPost';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    const getPosts = async () => {
        setIsLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setPosts(res.data);
        setIsLoading(false);
    }


    useEffect(() => {
        getPosts();
    }, []);

    return (
    <>
        <NewPost />
        {isLoading ? <Spinner /> :
            <Card style={{ marginBottom: '8px'}}>
                <Card.Body>
                    {
                        posts.map(post => (
                            <ForumPosts key={post.id} post={post} />
                        ))
                    }
                </Card.Body>
            </Card>
        }
    </>
    )
}

export default Forum;