import React, { useState } from 'react'
import { Form, Button,  } from 'react-bootstrap'
import axios from 'axios'
const NewPost = () => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: null
    })

    const handleChange = (e) => {
        e.persist()
        setPost(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    console.log(post)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
            post
        })
        setLoading(false)

    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" as="input" type='text' value={post.title} onChange={handleChange} />
                    <Form.Label>New forum post</Form.Label>
                    <Form.Control name="body" as="textarea" rows={3}
                        value={post.body} onChange={handleChange} />
                    <Form.Label>User</Form.Label>
                    <Form.Control name="userId" as="input" type='number' value={post.userId} onChange={handleChange} />
                    <br />
                    <Button disabled={loading} type="submit" onClick={handleSubmit}>Add New Post</Button>
                </Form.Group>

            </Form>
            {loading && <p>Please wait</p>}
        </>
    )
}

export default NewPost;