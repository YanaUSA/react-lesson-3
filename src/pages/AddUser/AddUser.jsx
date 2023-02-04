import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/usersSlice';
import { getAnswer } from 'services/statusApi';

const initialUserState = {
  name: '',
  age: '',
};

export const AddUser = () => {
  const [user, setUser] = useState(initialUserState);
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const submitForm = async e => {
    e.preventDefault();

    const answer = await getAnswer();

    const newUser = {
      id: nanoid(),
      name: user.name,
      age: user.age,
      status: answer === 'no' ? 'offline' : 'online',
    };
    if (+newUser.age < 0) {
      return console.log("Woops, age can't be less of zero");
    }
    console.log('all ok');
    dispatch(addUser(newUser));
    setUser(initialUserState);
  };

  return (
    <form onSubmit={submitForm} autoComplete="off">
      <label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={handleInput}
        />
      </label>
      <label>
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={handleInput}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
