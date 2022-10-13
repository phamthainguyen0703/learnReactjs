import React from "react";


class UserInfor extends React.Component {

    state = {
        name: `Quyên`,
        addr: `home`,
        age: `20`
    };


    // dont use this
    handleClick = (event) => {
        console.log(this.state);

        this.setState({
            name: `Nguyên`,
            age: Math.floor((Math.random() * 100) + 1),
        })
    }


    handleOnChangeInputName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    };


    render() {
        return (
            <div> My name is: {this.state.name}, im {this.state.age} years old

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInputName(event)} />
                    <button>Submit</button>
                    <br />
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeInputAge(event)} />
                    <button>Submit</button>
                </form></div>
        )
    }
}
export default UserInfor;