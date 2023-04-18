import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getMissions } from '../redux/Mission/MissionsSlice';

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
    <>
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
            <>
              <tr key={item.mission_id}>
                <td>{item.mission_name}</td>
                <td>{item.description}</td>
                <td>
                  <Button as="a" variant="primary">
                    Button as link
                  </Button>
                </td>
                <td>
                  <Button as="a" variant="primary">
                    Button as link
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
