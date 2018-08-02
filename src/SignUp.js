import React, {Component} from 'react'

class SignUp extends Component{
    render(){
        return(
            <div className="signUp" style = {styles}>
                Signing In!!!
            </div>
        )
    }
}

const styles={
    flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems:'stretch',
   height:'100vh'
}

export default SignUp