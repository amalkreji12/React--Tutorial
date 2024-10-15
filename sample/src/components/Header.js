// import { Component } from "react";


function HeaderFun(props){
    return(
        <h1>Header , Hello this is header ! : {props.data}</h1>
    )
};


// using class component
// class HeaderFun extends Component{
//     render(){
//         return(<h1>Header , Hello this is header ! : {this.props.data}</h1>)
//     }
// }


export default HeaderFun