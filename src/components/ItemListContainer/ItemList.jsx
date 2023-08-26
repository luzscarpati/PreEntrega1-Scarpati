import propTypes from 'prop-types';

const ItemList = ({list}) => {
    return (
        <div>
            <h2>ItemList</h2>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.img} alt={item.name}></img>
                        <p>Precio: ${item.price}</p>
                        <p>Categoría: {item.category}</p>

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