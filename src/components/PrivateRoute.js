import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Here are the requirements for our PrivateRoute component.

// It has the same API as <Route />.
// It renders a <Route /> and passes all the props through to it.
// It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login.

const PrivateRoute = ({component: Componenet, ...rest}) => {
    return <Route 
    {...rest}
    render={props => 
    localStorage.getItem("token") ? ( <Componenet {...props} />) : ( <h1>Please Login to access friends list</h1> )}
/>
}

export default PrivateRoute