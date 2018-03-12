import React from "react";
import { LocalForm, Control } from "react-redux-form";

class UserForm extends React.Component{
    render(){
        return(
            <LocalForm>
              onUpdae={form => this.handleUpdate(form)}
              onChange={values => this.handleChange(values)}
              onSubmit={values => this.handleSubmit(values)}

              <Control.text model=".username" />
            <Control.text model=".password" />
          </LocalForm>
        )
    }
}


export default UserForm;