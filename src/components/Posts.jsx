import React, { Component } from 'react';
import { Card, Modal, Button, Header, Form } from 'semantic-ui-react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            header: '',
            description: '',
            meta: '',
            hideModal:false,

        };
        this.changeValue = this.changeValue.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ notes: data }));
    }
    saveForm(e) {
        e.preventDefault();
        let newPost = {
            header: this.state.header,
            description: this.state.description,
            meta: ''
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'Post',
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(data => this.setState({hideModal:false}));
    }
    changeValue(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClose = () => this.setState({ hideModal: false })
    handleOpen = () => this.setState({ hideModal: true })

    render() {
        const newPosts = this.state.notes.map(note => ({ header: note.title, description: note.body, meta: note.id }));
        return (
            <div>
                <br />
                <br />
                <br />
                <h1>Post List</h1>
                <Modal   open={this.state.hideModal} onClose={this.handleClose} trigger={<Button onClick={this.handleOpen}>Add New Post</Button>}>
                    <Modal.Header>Add New Post</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Form onSubmit={this.saveForm}>
                                <Form.Field>
                                    <label>Title</label>
                                    <input placeholder='Title' name='header' onChange={this.changeValue} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Description</label>
                                    <textarea placeholder="description" name='description' onChange={this.changeValue} />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <Card.Group items={newPosts} />
            </div>
        );
    }
}

export default Posts;