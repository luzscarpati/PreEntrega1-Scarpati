import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemList = ({ list, isLoading }) => {
    if (isLoading) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="spinner-border text-success" role="status" style={{ width: '4rem', height: '4rem', marginTop: '-20px' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };
    return (
        <div>
            <ul className='list-unstyled d-flex flex-wrap justify-content-center'>
                {list.map((item) => (
                    <li key={item.id} className={`card col-md-3 mb-4 mx-2`}>
                        <img src={item.img} alt={item.name} className='card-img-top item-image' />
                        <div className='card-body'>
                            <h3 className='card-title'>{item.name}</h3>
                            <p className='card-text'>Precio: ${item.price}</p>
                            <p className='card-text'>Categoría: {item.category}</p>
                            <Link to={`/item/${item.id}`}>
                                <button className='btn btn-success'>Detalles</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ItemList.propTypes = {
    list: propTypes.array.isRequired,
    isLoading: propTypes.bool,
}

export default ItemList;