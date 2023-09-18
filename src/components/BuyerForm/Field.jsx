import PropTypes from "prop-types";

const Field = ({ label, name, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} type="text" onChange={onChange} />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;