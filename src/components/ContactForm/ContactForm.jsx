import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Span,
  Button,
  ButtonField,
} from './ContactForm.styled';



const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Formik >
        <Form onSubmit={this.handleSubmit} >
          <FormContainer >
            <FormField>
              <Label>
                <Span>Name</Span>
                <Input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </Label>
            </FormField>
            <FormField>
              <Label>
                <Span>Phone Number</Span>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                  required
                />
              </Label>
            </FormField>
            <ButtonField>
              <Button type="submit">Add Contact</Button>
            </ButtonField>
          </FormContainer>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
