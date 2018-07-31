import React, {Component} from 'react'

import HomePage from './HomePage'
import Sidebar from './Sidebar'

class Main extends Component{
    render(){
        return(
          <div className="Main" style={styles}>
             <Sidebar />
             <HomePage />
          </div>
        )
    }
}

const styles={
    display:'flex',
    alignItems:'stretch',
    height:'100vh',
}

export default Main