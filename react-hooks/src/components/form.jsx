import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    state = {
        userId: "",
        pincode: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ city: data.city }))
    }
    render() {
        return (
            <>

                <div style={{ textAlign: "center", marginTop: "10%" }}>
                    <h3><Link to="/admin">Admin panel</Link></h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input type="text" placeholder="Enter userid" onChange={e => this.handleChange(e)} name="userId"></input>
                        <input type="text" placeholder="Enter pincode" onChange={e => this.handleChange(e)} name="pincode"></input>
                        <input type="submit" placeholder="Submit"></input>
                    </form>
                    {this.state.city}
                </div>
            </>
        );
    }
}

export default Form;