import React from 'react';
import { Item, Name, Number, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => onDelete(id)}>
        <FiTrash2 size={30}  />
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
