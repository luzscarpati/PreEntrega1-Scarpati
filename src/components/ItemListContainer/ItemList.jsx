import propTypes from 'prop-types';
import styles from "./ItemList.module.css";

const ItemList = ({ list }) => {
    return (
        <div className={styles.cardContainer}>
        <ul className='list-unstyled d-flex flex-wrap justify-content-center'>
            {list.map((item) => (
                <li key={item.id} className={`card col-md-3 mb-4 mx-2 ${styles.card}`}>
                    <img src={item.img} alt={item.name} className='card-img-top item-image' />
                    <div className='card-body'>
                        <h3 className='card-title'>{item.name}</h3>
                        <p className='card-text'>Precio: ${item.price}</p>
                        <p className='card-text'>Categoría: {item.category}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};

ItemList.propTypes = {
    list: propTypes.array.isRequired,
}

export default ItemList;