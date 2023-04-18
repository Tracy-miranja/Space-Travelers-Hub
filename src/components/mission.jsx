import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
      <h1>Missions</h1>
      {mission.map((item) => (
        <div key={item.mission_id}>
          <h4>{item.mission_name}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Mission;
