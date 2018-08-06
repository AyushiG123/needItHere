import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, ButtonToolbar} from 'react-bootstrap'

class HomePage extends Component{
    render(){
        return(
            <div className = "Home" style={styles.home}>
              <h1 style={styles.h1}>
                #NEED
              </h1>
              <h2 style={styles.h2}> 
                 Where the needs of the community make a stand
              </h2>
              <p>

                </p>
              <h2>
                Begin Here...
                </h2>
                <ButtonToolbar>
                  <Button>
                       <Link
                       to="/signUp">
                       Sign Up or Log In
                       </Link>
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}

const styles = {
  home:{
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems:'stretch',
   height:'100vh'
  },

  h1:{
    fontFamily: "'Cabin Sketch', cursive",
    fontSize: '70px',
    marginLeft:'230px'
  },

  h2:{
     marginLeft:'270px'
  },

  button:{
     display:'inline-block',
     width:'fit-content',
     fontSize:'20px',
     border:'none',
     textDecoration:'none',
     marginLeft:'30px',
     color:'black'
  },

}

export default HomePage