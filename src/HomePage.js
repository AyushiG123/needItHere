import React, {Component} from 'react'

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
  }
}

export default HomePage