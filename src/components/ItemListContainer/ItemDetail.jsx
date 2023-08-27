import PropTypes from 'prop-types';

const ItemDetail = ({item, isLoading}) => {
    if(isLoading) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
    <div className="spinner-border text-success" role="status" style={{ width: '4rem', height: '4rem', marginTop: '-20px' }}>
        <span className="visually-hidden">Loading...</span>
    </div>
</div>


        )};
    
    if(!item) {
        return(
            <div className="container d-flex justify-content-center align-items-start" style={{ height: '80vh' }}>
    <div className="text-center">
        <h4>Producto inexistente</h4>
    </div>
</div>

        )};

    return (
        <div className="container">
            <hr/>
    <div className="row justify-content-center">
        <div className="card col-md-6 mb-4 mx-auto">
            <img src={item.img} alt={item.name} className="card-img-top item-image" />
            <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Categoría: {item.category}</p>
                <p className="card-text">Descripción: {item.description}</p>
            </div>
        </div>
    </div>
</div>

    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default ItemDetail;