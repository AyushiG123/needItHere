import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'

class Contents extends Component{
    render(){
        return(
            <div className ="contents">
                <ul className={css(styles.ul)}>
                   <li className={css(styles.li)}>
                        <Link 
                        to="/"
                        className={css(styles.link)}
                        >
                        Home
                        </Link>
                   </li>
                   <li className={css(styles.li)}>
                        <Link 
                        to="/signUp"
                        className={css(styles.link)}
                        >
                        Sign Up or Log In
                        </Link>
                   </li>
                   <li className={css(styles.li)}>
                        <Link 
                        to="/vote"
                        className={css(styles.link)}
                        >
                        Vote!
                        </Link>
                   </li>
                </ul>
            </div>
        ) 
    }
}

const styles=StyleSheet.create({
  li:{
      listStyle:'none',
      margin:0,
      fontSize:'20px',
      textAlign:'left',
      cursor:'pointer',
      
  },

  link:{
    display: 'block',
    height:'50px',
    color: 'black',
    textDecoration: 'none',
    marginTop:'30px',
    //marginBottom:'50px',
    textAlign:'center',

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },

  ul:{
      paddingLeft:'10px',
  },
})

export default Contents