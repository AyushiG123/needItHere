import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Contents extends Component{
    render(){
        return(
            <div className ="contents">
                <ul>
                   <li style = {styles.li}><NavLink to="/">Home</NavLink></li>
                   <li style = {styles.li}><NavLink to="/signUp">Sign Up or Log In</NavLink></li>
                   <li style = {styles.li}><NavLink to="/vote">Vote!</NavLink></li>
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