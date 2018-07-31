import React, {Component} from 'react'

class Contents extends Component{
    render(){
        return(
            <div className ="contents">
                <ul>
                   <li style = {styles.li}>Home</li>
                   <li style = {styles.li}>Sign Up or Log In</li>
                   <li style = {styles.li}>Vote!</li>
                </ul>
            </div>
        )
    }
}

const styles={
  li:{
      margin:'30px',
      fontSize:'19.6px',
      marginLeft:0,
      paddingLeft:0,
      textAlign:'left',
      cursor:'pointer'
  }
}

export default Contents