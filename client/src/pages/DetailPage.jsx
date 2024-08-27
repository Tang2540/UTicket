import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DeatailCard';

const DetailPage = ({items}) => {
    const { id } = useParams();
    const item = items.find((item) => item.id === parseInt(id));
  
    if (!item) {
      return <div>Item not found</div>;
    }
  
    return (
      <>
      <DetailCard item={item}/>
      <div className="max-w-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
        <img className="w-full rounded-lg mb-4" src={item.image} alt={item.title} />
        <p className="text-gray-700">{item.description}</p>
      </div>
      </>
    );
}

DetailPage.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired,
  };

export default DetailPage