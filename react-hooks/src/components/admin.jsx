import React, { Component } from 'react';

class Admin extends Component {
    state = {
        list: [],
        error: ""
    }
    componentDidMount() {
        fetch("/list")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        list: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }
    render() {
        var dict = {};
        this.state.list.forEach(element => dict[element.userId] = [])
        this.state.list.forEach(element => dict[element.userId].push(element.city.slice(0, -2)))
        console.log(dict)
        return (
            <div style={{ textAlign: "center" }}>
                {Object.keys(dict).map((e, i) => (
                    <h2 style={{ color: "blue" }}>Userid: {e}
                        <h4 style={{ color: "black" }} key={i}>{dict[e].map(x => (
                            <div>{x}</div>
                        ))}</h4>
                    </h2>
                ))}
            </div>
        );
    }
}

export default Admin;