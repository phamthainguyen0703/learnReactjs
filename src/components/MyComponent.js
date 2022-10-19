// class components
// function components
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {




    state = {
        listUser: [
            { id: 1, name: "Nguyên", age: "20" },
            { id: 2, name: "Q", age: "20" },
            { id: 3, name: "H", age: "20" },
        ]
    };

    //jsx


    render() {

        const myInfor = [`N`, `Q`, `20`]
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUser={this.state.listUser}
                    users={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponents;