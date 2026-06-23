import React from 'react'

const User = ({user}) => {
  return (
    <div>
       <h3>{user.firstName} {user.lastName}</h3>
       <p>Email: {user.email}</p>
    </div>
  )
}

export default User
