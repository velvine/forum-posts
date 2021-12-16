import React, { useState } from 'react'
import { Form, Button,  } from 'react-bootstrap'
import axios from 'axios'
const NewComment = () => {
    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState({
        title: '',
        body: '',
        userId: null
    })

    const handleChange = (e) => {
        e.persist()
        setComment(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    console.log(comment)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await axios.comment('https://jsonplaceholder.typicode.com/posts/1/comments', {
            comment
        })
        setLoading(false)

    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" as="input" type='text' value={comment.name} onChange={handleChange} />
                    <Form.Label>New comment post</Form.Label>
                    <Form.Control name="body" as="textarea" rows={3}
                        value={comment.body} onChange={handleChange} />
                    <Form.Label>User email</Form.Label>
                    <Form.Control name="email" as="input" type='email' value={comment.email} onChange={handleChange} />
                    <br />
                    <Button disabled={loading} type="submit" onClick={handleSubmit}>Add New Comment</Button>
                </Form.Group>

            </Form>
            {loading && <p>Please wait</p>}
        </>
    )
}

export default NewComment;