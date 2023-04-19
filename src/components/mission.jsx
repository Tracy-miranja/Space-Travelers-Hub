import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { getMissions, joinMission, leaveMission } from '../redux/Mission/MissionsSlice';

const Mission = () => {
  const { mission, loading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <section className="table">
      <table className="table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mission.map((item) => (
            <tr key={item.mission_id}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                {item.reserved ? (
                  <Button variant="primary" className="button" onClick={() => dispatch(leaveMission(item.mission_id))}>
                    Leave Mission
                  </Button>
                ) : (
                  <Button variant="primary" className="button">
                    Not A Member
                  </Button>
                )}
              </td>
              <td>
                {item.reserved ? (
                  <Badge variant="success">Active Member</Badge>
                ) : (
                  <Button variant="primary" className="button" onClick={() => dispatch(joinMission(item.mission_id))}>
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Mission;
