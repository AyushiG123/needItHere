import React, {Component} from 'react'

import Contents from './Contents'

class Sidebar extends Component{
    render(){
        return(
            <div className="Sidebar" style={styles.sidebar}>
                <h1 style={styles.h1}>
                    Know more...
                </h1>
                <Contents />
            </div>
        )
    }
}

const styles={
    sidebar:{
    backgroundColor: "#C1C6E5",
    color: 'rgba(0, 0, 0, 0.8)',
    width: '15rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'stretch',
    height:'100vh'
    },
    
    h1:{
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: '1.5rem',
    marginTop: '0',
    }
}

export default Sidebar