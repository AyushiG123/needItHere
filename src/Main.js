import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './HomePage'
import VotePage from './VotePage'
import SignUp from './SignUp'

class Main extends Component{
    render(){
        return(
          <div className="Main" style={styles}>
            <Switch>
               <Route path='/' exact component={HomePage}/>
               <Route path='/signUp' exact component={SignUp}/>
               <Route path='/vote' exact component={VotePage}/>
            </Switch>
          </div>
        )
    }
}

const styles={
    display:'flex',
    alignItems:'stretch',
    height:'100vh'
}

export default Main