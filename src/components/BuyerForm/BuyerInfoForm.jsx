import { useState } from "react";
import Field from './Field';

const BuyerInfoForm = ({ sendDataToCheckout }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formState;

  const onChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const isFormValid = name && email && phone;
  const onSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      sendDataToCheckout({ name, email, phone });
    }
  };
  return (
    <div>
      <h6>Ingresa tus datos para completar la compra</h6>

      <form onSubmit={onSubmit}>
        <Field label="Nombre" name="name" onChange={onChange} />
        <Field label="Email" name="email" onChange={onChange} />
        <Field label="Teléfono" name="phone" onChange={onChange} />

        <button disabled={!isFormValid} type="submit" className='btn btn-success'>
          Enviar datos
        </button>
      </form>
    </div>
  );
}

export default BuyerInfoForm;
