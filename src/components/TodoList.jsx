import { useSelector } from "react-redux";
import { useMemo } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.searchTerm).toLowerCase();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  }, [todos, filter, searchTerm]);

  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul className="mt-4">
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      ) : (
        <li className="my-2 text-sm text-center text-gray-500">No todos found</li>
      )}
    </ul>
  );
};

export default TodoList;
