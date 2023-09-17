
const CheckOut = () => {
    const createOrder = () => {
        const order = {
            buyer: {
                name: "Lucecita",
                phone: 2901535583,
                mail: "luz.scarpati@gmail.com"
            },
            products: {
                id: 1,
                name: "Nombre: Smartphone Model X",
                price: 599.99
            }
        }
    }
    return (
        <div>
            <h5>CheckOut</h5>
            <button onClick={createOrder}>Crear Orden</button>

        </div>
    )
};

export default CheckOut;