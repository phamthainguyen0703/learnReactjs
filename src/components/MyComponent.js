// class components
// function components
import React, { Suspense, useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponents extends React.Component {




//     state = {
//         listUser: [
//             { id: 1, name: "Trang", age: "53" },
//             { id: 2, name: "Loan", age: "46" },
//             { id: 3, name: "Nguyên", age: "21" },
//             { id: 4, name: "khôi", age: "14" },
//             { id: 5, name: "Vy", age: "13" },
//         ]
//     };


//     handleAddNewUser = (userObj) => {
//         console.log("check test: ", userObj)
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }
//     //jsx

//     handleDeleteUser = (userId) => {
//         let ListUserClone = this.state.listUser;
//         ListUserClone = ListUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: ListUserClone
//         })

//     }




//     render() {

//         const myInfor = [`N`, `Q`, `20`]
//         return (
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br />
//                 <DisplayInfor
//                     listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />


//             </div>
//         );
//     }
// }


const MyComponents = (props) => {


    const [listUser, setlistUser] = useState([
        { id: 1, name: "Trang", age: "53" },
        { id: 2, name: "Loan", age: "46" },
        { id: 3, name: "Nguyên", age: "21" },
        { id: 4, name: "khôi", age: "14" },
        { id: 5, name: "Vy", age: "13" },
    ])



    const handleAddNewUser = (userObj) => {
        setlistUser([userObj, ...listUser])

    }
    //jsx

    const handleDeleteUser = (userId) => {
        let ListUserClone = listUser;
        ListUserClone = ListUserClone.filter(item => item.id !== userId);
        setlistUser(ListUserClone)

    }


    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}


export default MyComponents;