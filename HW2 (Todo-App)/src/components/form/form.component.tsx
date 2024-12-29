import { ITodoItem } from "../../types";

interface IProps {
  onSubmit: (item: ITodoItem) => void;
}

function Form(props: IProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title: string = e.currentTarget["task"].value;
    const urgent: boolean = e.currentTarget["urgent"].checked;
    if (title.length > 3) {
      const newTask: ITodoItem = {
        id: Date.now(),
        title,
        isUrgent: urgent,
        isDone: false,
      };
      props.onSubmit(newTask);
      form.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        name="task"
        placeholder="Type Todo here..."
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="urgent" className="text-gray-700">
          Urgent
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        Add Todo
      </button>
    </form>
  );
}

export default Form;
