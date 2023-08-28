import { useLocation, useNavigate } from 'react-router-dom';
import { excludeOwnerName } from './ShipsList';

const ShipDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ship = location.state.el;

  function returnToMainPage() {
    navigate('/');
  }

  return (
    <div className="ship-details">
      <button type="button" className="btn btn-outline-warning mb-3" onClick={returnToMainPage}>
        &laquo; Return to List
      </button>
      <div className="card">
        <div className="card-header bg-header text-white">
          <h5 className="mb-0">Ship Details</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Country of Origin:</strong> {excludeOwnerName(ship.name)}
          </li>
          <li className="list-group-item">
            <strong>Built:</strong> {ship.built}
          </li>
          <li className="list-group-item">
            <strong>Name:</strong> {ship.name}
          </li>
          <li className="list-group-item">
            <strong>Length (meters):</strong> {ship.lengthMeters}
          </li>
          <li className="list-group-item">
            <strong>Beam (meters):</strong> {ship.beamMeters}
          </li>
          <li className="list-group-item">
            <strong>TEU (Twenty-foot Equivalent Unit):</strong> {ship.maxTEU}
          </li>
          <li className="list-group-item">
            <strong>Owner:</strong> {ship.owner}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShipDetails;
