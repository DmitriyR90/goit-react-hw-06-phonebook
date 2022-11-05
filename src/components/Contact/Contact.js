import { ContactWrap, ContactBtn } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{number} </p>
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </ContactWrap>
  );
};

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

/*
 return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{number} </p>
      <ContactBtn
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </ContactBtn>
    </ContactWrap>
  );
  */
