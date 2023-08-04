import React, { Component } from 'react';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [ ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };


componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const savedContacts = JSON.parse(contacts);
  if (savedContacts) {
    this.setState({ contacts: savedContacts });
    console.log("Set state: Did mount");
  }
}

componentDidUpdate(prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  console.log("set Item: updated")
}



  addContact = newContact => {
    if (
      this.state.contacts.some(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      return alert(`${newContact.name} is already in your Book`);
    }

    const id = nanoid();
    const newAddContact = { id, ...newContact };

    this.setState(prevState => {
      return {
        contacts: [newAddContact, ...prevState.contacts],
      };
    });
  };

  deleteContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Header />

        <Section title="Phone Book">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.getFilter} />
          <ContactList
            contacts={this.filteredContacts()}
            onDelete={this.deleteContacts}
          />
        </Section>
      </div>
    );
  }
}
