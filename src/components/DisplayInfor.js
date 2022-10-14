import React from "react";


// properties
class DisplayInfor extends React.Component {
    render() {
        // detructuring array//object  
        const { name, age, myInfo } = this.props;
        return (
            <div>
                <div>My name is: {name}</div>
                <div>My age's: {age}</div>
                <div>My Infor: {myInfo}</div>
            </div>
        )
    }
}

export default DisplayInfor;