import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const ItemList = ({ items, isLoading }) => {
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
        <div> <h4>Mira nuestros Productos</h4>
        <hr/>
  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
    {items.map((item) => (
      <li key={item.id} className={`card col-md-3 col-sm-6 mb-4 mx-2`}>
        <img src={item.img} alt={item.name} className="card-img-top item-image" />
        <div className="card-body">
          <h6 className="card-title">Nombre: {item.name}</h6>
          <p className="card-text">Categoría: {item.category}</p>
          <p className="card-text">Precio: ${item.price}</p>
          <Link to={`/item/${item.id}`}>
            <button className="btn btn-success">Detalles</button>
          </Link>
        </div>
      </li>
    ))}
  </ul>
</div>

    );
};
ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
}

export default ItemList;
