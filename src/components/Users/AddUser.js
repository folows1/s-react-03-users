import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal";

import classes from './AddUser.module.css';

const AddUser = props => {
  const initialFormState = { id: null, name: '', age: '' }

  const [user, setUser] = useState(initialFormState)
  const [error, setError] = useState();

  const handleFormSubmit = event => {
    event.preventDefault()
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+user.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    props.onAddUser(user)
    console.log(user)
    setUser(initialFormState)
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  const closeModal = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} closeModal={closeModal} />}
      <Card className={classes.input}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" value={user.age} onChange={handleInputChange} min='0' max='120' />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser;