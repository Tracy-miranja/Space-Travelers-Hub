import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRocket } from '../redux/Rocket/RocketsSlice';

const Rockets = () => {
  const { rockets, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocket());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Rockets</h1>
      {rockets.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <img src={item.flickr_images[0]} alt="rocket" />
        </div>
      ))}
    </>
  );
};

export default Rockets;
