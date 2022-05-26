import React from 'react'
import axios from 'axios'

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }
   

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log("Friends Data:", res.data)
                this.setState({
                    friendsList: res.data
                })
                console.log("STATE:", this.state.friendsList)
            })
            .catch(err => console.error(err))
    }






    render() {

        return (
            <div>
                <h1>ALL THE FRIENDS</h1>
                <ul id="friends-ul">
                {
                      this.state.friendsList.map(friend => {
                        return <li id="friends-li">{friend.name} - {friend.age} - {friend.email}</li> 
                      })



                }
                  
                </ul>
            </div>
        )
    }










}

export default FriendsList