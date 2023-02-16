import React, { useState } from "react";


// class AddUserInfor extends React.Component {

//     state = {
//         name: ``,
//         addr: ``,
//         age: ``
//     };


//     // dont use this
//     handleClick = (event) => {
//         // console.log(this.state);

//         this.setState({
//             name: `Nguyênn`,
//             age: Math.floor((Math.random() * 100) + 1),
//         })
//     }


//     handleOnChangeInputName = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }
//     handleOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age,
//         });
//     };


//     render() {
//         return (
//             <div> My name is: {this.state.name}, im {this.state.age} years old

//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInputName(event)} />
//                     <button>Submit</button>
//                     <br />
//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInputAge(event)} />
//                     <button>Submit</button>
//                 </form></div>
//         )
//     }
// }




const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('')




    const handleOnChangeInputName = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeInputAge = (event) => {
        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age,
        });
    };

    return (
        <div> My name is: {name}, im {age} years old
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInputName(event)} />
                <button>Submit</button>
                <br />
                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeInputAge(event)} />
                <button>Submit</button>
            </form></div>
    )
}

export default AddUserInfor;