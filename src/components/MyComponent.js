// class components
// function components
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {
    //jsx


    render() {

        const myInfor = [`N`, `Q`, `20`]
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name={"Nguyên"} age={"20"} myInfo={myInfor} />
            </div>
        );
    }
}

export default MyComponents;