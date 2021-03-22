import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from  'react-router-dom'


const PublicRouter = ({isAuthenticated,component:Component,...rest}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <Redirect to="/todo"/>

            

            
        ):(
            <Component {...props}/>
        )
    )}/>
)

const mapStateToProps=(state)=>({
    isAuthenticated: !!state.auth.uid
})



export default connect(mapStateToProps)(PublicRouter)
