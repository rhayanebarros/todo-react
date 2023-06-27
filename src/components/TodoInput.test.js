import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import TodoInput from './TodoInput'

test('loads and displays greeting', async () => {
  const addTodo = jest.fn();
  const setTodo = jest.fn();
  const todo = '';

  // ARRANGE
  render(<TodoInput addTodo={addTodo} setTodo={setTodo} todo={todo} />)

  // ACT
  expect(screen.getByText('texto qualquer'))
  
  await userEvent.click(screen.getByRole('button'), {name: 'Add'})
  await userEvent.type(await screen.findByPlaceholderText('Create a new todo'), 'Hello World!')


  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  
  expect(addTodo).toBeCalledTimes(1)
  waitFor(() => {
    expect(setTodo).toBeCalledWith('Hello World!')
  })
  
})