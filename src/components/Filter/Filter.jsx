import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Form>
      <label>
        <Input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Find contacts by name"
        />
      </label>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
