import React, { Component } from 'react';
import emailjs from 'emailjs-com';
// import classes from './Contact.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        let templateParams = {
            "from_name": name,
            "from_email": email,
            "project_request": message,
        }
        emailjs.send(
            'gmail',
            'contact',
            templateParams,
            'user_wwo3XzSnMgSAR5hgP5jJv'
        )
        console.log(templateParams)
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <>
                    <h1 className="p-heading1">Get in Touch</h1>
                    <form onSubmit={ this.handleSubmit.bind(this) }>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={ this.state.name }
                                onChange={ this.handleChange.bind(this, 'name') }
                                placeholder="Name"
                            />
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={ this.state.email }
                                onChange={ this.handleChange.bind(this, 'email') }
                                placeholder="Email"
                            />
                            <label>Message</label>
                            <textarea
                                type="textarea"
                                name="message"
                                required
                                rows={4}
                                value={ this.state.message }
                                onChange={ this.handleChange.bind(this, 'message') }
                                placeholder="Message"
                            />
                        <button type="submit">
                            Submit
            </button>
                    </form>
            </>
        )
    }
}

export default ContactForm;