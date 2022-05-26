import React from 'react'
import axios from 'axios'

class Logout extends React.Component {

    componentDidMount() {
        this.logout()
    };

    logout = () => {

        const token = localStorage.getItem("token")
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem("token")
            
            
        })
        .catch(err => console.error(err))

    }
    render() {
        return (
            <div>
                <h1>You have succesfully logged out</h1>
            </div>
        )
    }
}
export default Logout;