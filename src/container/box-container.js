import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";
import UserForm from '../component/UserForm.js';
class BoxCon extends React.Component{
    render(){
        return(
            <div>
                <UserForm/>
                <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
            </div>    
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);