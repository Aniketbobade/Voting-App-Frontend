import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VotingProcess = ({voterData}) => {
    console.log(voterData);
    const[party, setParties]= useState([]);
    const adminId=voterData.data.adminId;
    useEffect(() => {
        axios
          .get(`http://localhost:8080/voting/list/${adminId}`)
          .then((response) => {
            setParties(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [adminId]);
  return (
    <div>
        <form>
        <div>
          Select a party:
          <select
            name="adminName"
            value={userData.adminName}
            onChange={handleChange}
          >
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        </form>
    </div>
  )
}

export default VotingProcess