import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';

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
        this.resetForm()
        alert("Your inquiry has been successfully sent! We'll be in touch shortly!")
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
                <div className={ classes.bg }></div>
                <h1 className={ classes.Header }>Get in Touch</h1>
                <p className={ classes.Paragraph }>Or look me up on LinkedIn and Github</p>
                <form
                    className={ classes.Form }
                    onSubmit={ this.handleSubmit.bind(this) }>
                    <div>
                        <input
                            type="text"
                            name="name"
                            className={ classes.Input }
                            required
                            value={ this.state.name }
                            onChange={ this.handleChange.bind(this, 'name') }
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            className={ classes.Input }
                            required
                            value={ this.state.email }
                            onChange={ this.handleChange.bind(this, 'email') }
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <textarea
                            type="textarea"
                            name="message"
                            className={ classes.Input }
                            required
                            rows={ 7 }
                            value={ this.state.message }
                            onChange={ this.handleChange.bind(this, 'message') }
                            placeholder="Message"
                        />
                    </div>
                    <div className={ classes.Center }>
                        <button className={ classes.SubmitButton } type="submit">
                            Send!
            </button>
                    </div>
                </form>
            </>
        )
    }
}

export default ContactForm;