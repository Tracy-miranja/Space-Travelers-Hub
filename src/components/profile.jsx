import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const { mission } = useSelector((state) => state.mission);
  const joinedMissions = mission.filter((m) => m.reserved);
  const reservedRockets = mission.filter((m) => m.reserved_rocket_id);

  useEffect(() => {
    localStorage.setItem('joinedMissions', JSON.stringify(joinedMissions));
    localStorage.setItem('reservedRockets', JSON.stringify(reservedRockets));
  }, [joinedMissions, reservedRockets]);

  useEffect(() => {
    const joinedMissions = JSON.parse(localStorage.getItem('joinedMissions'));
    const reservedRockets = JSON.parse(localStorage.getItem('reservedRockets'));

    if (joinedMissions) {
      dispatch({ type: 'LOAD_JOINED_MISSIONS', payload: joinedMissions });
    }

    if (reservedRockets) {
      dispatch({ type: 'LOAD_RESERVED_ROCKETS', payload: reservedRockets });
    }
  }, [dispatch]);

  return (
    <div className="profile-container">
      <div className="mission-list">
        <h2>My Missions</h2>
        <table className="profile-table">
          <thead>
            <tr>
              <th>Mission Name</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions.map((m) => (
              <tr key={m.mission_id}>
                <td>{m.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rocket-list">
        <h2>Reserved Rockets</h2>
        <table className="profile-table">
          <thead>
            <tr>
              <th>Rocket Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((m) => (
              <tr key={m.reserved_rocket_id}>
                <td>{m.reserved_rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
