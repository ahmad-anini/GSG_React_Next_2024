import { ITodoItem } from "../../types";
import TodoItem from "../todo-item/todo-item.component";

interface IProps {
  items: ITodoItem[];
  onToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

function TodoList(props: IProps) {
  const renderItems = (items: ITodoItem[]) =>
    items.map((item) => (
      <TodoItem
        key={item.id}
        data={item}
        onToggle={props.onToggle}
        handleDelete={props.handleDelete}
      />
    ));

  return (
    <div
      className={`flex flex-col gap-4 bg-white p-4 shadow-md rounded-md ${
        props.items.length === 0 ? "hidden" : ""
      }`}
    >
      {renderItems(props.items)}
    </div>
  );
}

export default TodoList;
