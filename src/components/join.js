import React from 'react';
import { useSelector } from 'react-redux';
// import Mission from './mission';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.mission) || [];
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="row">
      {joinedMissions.map((mission) => (
        <div className="col-sm-4" key={mission.mission_id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{mission.mission_name}</h5>
              <p className="card-text">{mission.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Status:</strong>
                {' '}
                Active Member
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JoinedMissions;
