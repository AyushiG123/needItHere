import React, {Component} from 'react'

class HomePage extends Component{
    render(){
        return(
            <div className = "Home" style={styles.home}>
              <h1 style={styles.h1}>
                #NEED
              </h1>
              <h2> 
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
  },

  h1:{
    fontFamily: "'Cabin Sketch', cursive",
    fontSize: '70px'
  },

  h2:{

  }
}

export default HomePage