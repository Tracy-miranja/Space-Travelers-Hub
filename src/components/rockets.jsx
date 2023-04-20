import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRocket, toggleReservedState } from '../redux/Rocket/RocketsSlice';
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
                  {item.reserved && <span className="reservedBadge">Reserved</span>}
                  {item.description}
                </p>
                <button
                  onClick={() => {
                    dispatch(toggleReservedState(item.id));
                  }}
                  type="submit"
                  className={item.reserved ? 'cancelBtn btn btn-outline-secondary btn-lg' : 'reservedBtn btn btn-primary btn-lg'}
                >
                  {item.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Rockets;
