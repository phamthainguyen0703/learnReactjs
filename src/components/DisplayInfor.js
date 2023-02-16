import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
import { hover } from "@testing-library/user-event/dist/hover";


//stateless vs statefull

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         console.log("call constructor: 1");
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }




//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })

//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("call update", this.props, prevProps);
//         if (this.props.listUser !== prevProps.listUser) {
//             if (this.props.listUser.length === 6)
//                 alert("u got 5 people")
//         }
//     }

//     componentDidMount() {
//         console.log("check test didMount");
//         setTimeout(() => {
//             document.title = 'khoi ngu'
//         }, 3000);
//     }


//     // properties

//     render() {

//         console.log("call render")


//         // detructuring array//object  
//         const { name, age, myInfo } = this.props;
//         const { listUser } = this.props;

//         // console.table(listUser)
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo} /> */}
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>
//                         {this.state.isShowListUser === true ? "Hide List User" : "Show List User"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUser &&
//                     <div>
//                         {listUser.map((user, index) => {
//                             // console.log("Check =>>>> ", user)
//                             return (
//                                 <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is: {user.name}</div>
//                                         <div>My age's: {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )


//                             // if (+user.age > 20) {
//                             //     return (
//                             //         <div key={user.id} className="green">
//                             //             <div>My name is: {user.name}</div>
//                             //             <div>My age's: {user.age}</div>
//                             //             <hr />
//                             //         </div>
//                             //     )
//                             // } else {
//                             //     return (
//                             //         <div key={user.id} className="red">
//                             //             <div>My name is: {user.name}</div>
//                             //             <div>My age's: {user.age}</div>
//                             //             <hr />
//                             //         </div>
//                             //     )
//                             // }

//                         })}
//                     </div>
//                 }

//             </div>
//         )
//     }
// }


const DisplayInfor = (props) => {


    const [isShowListUser, setShowListUser] = useState(false)


    const handleShowHide = () => {
        setShowListUser(!isShowListUser);
    }

    console.log("call render")
    const { name, age, myInfo } = props;
    const { listUser } = props;


    useEffect(() => {
        if (listUser.length === 3) {
            alert("u only have 3 users")
        }
        console.log(">>>check useEffect")
    }, [listUser]
    );


    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHide()}>
                    {isShowListUser === true ? "Hide List User" : "Show List User"}
                </span>
            </div>
            {
                isShowListUser &&
                <div>
                    {listUser.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                <div>
                                    <div>My name is: {user.name}</div>
                                    <div>My age's: {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div >
    )

}
export default DisplayInfor;