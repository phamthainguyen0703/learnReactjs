import React from "react";



// properties
class DisplayInfor extends React.Component {

    render() {
        // detructuring array//object  
        const { name, age, myInfo } = this.props;
        const { listUser } = this.props;

        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name is: {user.name}</div>
                            <div>My age's: {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;