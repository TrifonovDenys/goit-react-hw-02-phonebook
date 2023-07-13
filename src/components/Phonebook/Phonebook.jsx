import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'

const initialValues = {
  name: ''
}


export const Phonebook = () => {
  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    console.log(initialValues.name);
    resetForm()
  }
  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form autoComplete='off'>
        <label htmlFor="name">Name</label>
          <Field
          data={nanoid()}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
      <div>Contact</div>
      <div></div>
    </>
    )
  }
