import React from "react";
import { useSelector } from "react-redux";
import VotingProcess from "../components/VotingProcess";

const VoterDetails = () => {
  const voterData = useSelector((state) => state.voterData.value);
  console.log(voterData);
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      {/* Info part */}
      <div>
        <div className="mb-4">
          <p className="text-lg font-bold">Voter Details</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Voter id: {voterData.data.adminId}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Voter name: {voterData.data.voterName}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Voter username: {voterData.data.username}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Your Admin name: {voterData.data.adminName}
          </p>
        </div>
      </div>
    {/* Voting Process */}
    {
      voterData.data.isVoted ? <div>You allready voted</div> : <VotingProcess voterData={voterData}/>
    }  
    </div>
  );
};

export default VoterDetails;
