import PropTypes from 'prop-types';
import Card from "../components/Card"
import Carousel from '../components/Carousel';

const Home = ({items}) => {
  return (
    <div className="min-h-[80vh]">
      <Carousel/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto lg:px-8">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Home