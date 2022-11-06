import { Contact } from '../Contact/Contact';
import { ContactSection, ContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactSection>
      {filteredContacts().map(contact => {
        return (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        );
      })}
    </ContactSection>
  );
};

/*
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
*/
