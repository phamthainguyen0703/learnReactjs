// class components
// function components
import React from "react";

class MyComponents extends React.Component {
    //jsx

    state = {
        name: `Quyên`,
        addr: `home`,
        age: `20`
    };

    handleClick = (event) => {
        console.log(this.state);

        this.setState({
            name: `Nguyên`,
            age: Math.floor((Math.random() * 100) + 1),
        })
    }

    render() {
        return (
            <div>
                My name is: {this.state.name}, im {this.state.age} years old

                <button onClick={(event) => { this.handleClick(event) }}>Click</button>
            </div>
        );
    }
}

export default MyComponents;