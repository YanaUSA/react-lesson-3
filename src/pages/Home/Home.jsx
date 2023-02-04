import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/usersSelectors';
import { deleteUser, toggleStatus } from 'redux/users/usersSlice';

export const Home = () => {
  const users = useSelector(selectUsers);
  //   const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users.map((el, i) => {
              return (
                <tr key={el.id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>
                    <span onClick={() => dispatch(toggleStatus(el.id))}>
                      {el.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => dispatch(deleteUser(el.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>woops </p>
      )}
    </>
  );
};

// #
// name
// age
// opt
