import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Input} from 'react-materialize'

const DateFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <Input
        type={type}
        className={classnames('datepicker', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="datepicker">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

DateFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

DateFieldGroup.defaultProps = {
  type: 'text'
};

export default DateFieldGroup;
