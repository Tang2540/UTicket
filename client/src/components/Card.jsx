import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ id, title, description, image }) {
  return (
    <Link to={`/item/${id}`} className="block">
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Card;