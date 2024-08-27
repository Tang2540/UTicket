import PropTypes from 'prop-types';


const DetailCard = ({item}) => {
  return (
    <div className='w-screen mb-11 mt-4 py-4 px-6'>
        <div className='grid grid-cols-3'>
            <div>
                <img src={item.image} alt={item.title} />
            </div>

            <div className='grid grid-cols-6 col-span-2'>
                <div className='col-span-5'>
                    <div>{item.title}</div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

DetailCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add other properties of 'item' that you're using in the component
  }).isRequired,
};


export default DetailCard;