import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Contents extends Component{
    render(){
        return(
            <div className ="contents">
              <nav>
                <ul>
                   <li style = {styles.li} ><Link to='/'>Home</Link></li>
                   <li style = {styles.li}><Link to='/signUp'>Sign Up or Log In</Link></li>
                   <li style = {styles.li}><Link to='/vote'>Vote!</Link></li>
                </ul>
              </nav>
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