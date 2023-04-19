import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRocket } from '../redux/Rocket/RocketsSlice';
import './rockets.scss';

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
      <section>
        <hr />
        {rockets.map((item) => (
          <div key={item.id} className="container mt-4">
            <div className="row">
              <div className="col col-3 image">
                <img src={item.flickr_images[0]} alt="rocket" />
              </div>
              <div className="col col-9 mt-2">
                <h4>{item.name}</h4>
                <p>
                  <button type="submit" className="btn reserved me-2">Reserved</button>
                  {item.description}
                </p>
                <button type="submit" className="btn btn-primary btn-lg">Reserve Rocket</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Rockets;
