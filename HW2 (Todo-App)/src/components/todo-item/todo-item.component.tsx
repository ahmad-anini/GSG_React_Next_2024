import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ITodoItem } from "../../types";

interface IProps {
  data: ITodoItem;
  onToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

function TodoItem({ data, onToggle, handleDelete }: IProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <input
          className="w-5 h-5 text-green-600 border-gray-300 rounded-full focus:ring-green-500"
          type="checkbox"
          checked={data.isDone}
          onChange={() => onToggle(data.id)}
        />
        <span
          className={`text-lg ${
            data.isDone ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {data.title}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className={`text-sm px-2 py-1 rounded ${
            data.isUrgent
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {data.isUrgent ? "Urgent" : "Not Urgent"}
        </span>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDelete(data.id)}
          className="text-red-500 cursor-pointer hover:text-red-700"
        />
      </div>
    </div>
  );
}

export default TodoItem;
