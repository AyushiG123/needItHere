import React, {Component} from 'react'

class VotePage extends Component{
    render(){
        return(
            <div className="votePage" style = {styles.votePage}>
                <h1>
                    Cast your vote....
                </h1>
                <div>
                    <img src="https://www.unh.edu/healthyunh/sites/default/files/styles/article/public/blog-post/healthcare_consumerism.png?itok=8yVWXh_5" alt="Hospital" style={styles.image1}/>
                    <div className='content' style={styles.content1}>
                      <h2>
                          Hospital/Health Care Centers
                          </h2>
                          <p>
                              24/7 health service minutes from your home
                              Specialized treatment for the entire family
                              </p>
                    </div>
                    <img src="https://www.itgovernance.eu/blog/wp-content/uploads/2014/10/atm2.jpg" alt="Bank" style={styles.image2}/>
                    <div className='content' style={styles.content2}>
                      <h2>
                          Bank
                          </h2>
                          <p>
                              Manage your accounts easily with dedicated service desks and 24 hour ATM
                              </p>
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
 votePage:{
    flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems:'stretch',
   height:'100vh',
    },

 content1:{
   position:'absolute',
   width:'400px',
   background: 'rgba(0, 0, 0, 0.5)',
   color: '#f1f1f1',
   top:'327px',
   marginLeft:'50px',
   cursor:'pointer'
 },

 image1:{
    marginTop:'60px',
    width:'400px',
    marginLeft:'50px',
    cursor:'pointer'
 },

 content2:{
    position:'absolute',
    width:'400px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    top:'327px',
    marginLeft:'550px',
    cursor:'pointer'
  },

 image2:{
     height:'300px',
    marginTop:'60px',
    width:'400px',
    marginLeft:'100px',
    cursor:'pointer'
 }

}

export default VotePage