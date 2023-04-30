import React from 'react'

const VoterRegistration = ({adminResponse}) => {

  return (
    <div>
        <div><p>Your Id : {adminResponse.voterId} </p></div>
        <div><p>Your Name:{adminResponse.voterName} </p></div>
        <div><p>You selected the admin:-{adminResponse.adminName} </p></div>
        <div><p>Your username:{adminResponse.username} </p></div>
    </div>
  )
}

export default VoterRegistration