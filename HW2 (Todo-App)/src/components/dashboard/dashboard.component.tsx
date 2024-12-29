import { ITodoItem } from "../../types";

interface IProps {
  items: ITodoItem[];
}

function Dashboard(props: IProps) {
  const urgentCount = props.items.filter((item) => item.isUrgent).length;
  const completedCount = props.items.filter((item) => item.isDone).length;

  return (
    <div className="grid grid-cols-3 gap-4 bg-white p-4 shadow-md rounded-md">
      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md">
        <b className="text-2xl font-bold text-gray-800">{props.items.length}</b>
        <span className="text-sm text-gray-500">Created Tasks</span>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md">
        <b className="text-2xl font-bold text-red-500">{urgentCount}</b>
        <span className="text-sm text-gray-500">Urgent Tasks</span>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md">
        <b className="text-2xl font-bold text-green-500">{completedCount}</b>
        <span className="text-sm text-gray-500">Completed Tasks</span>
      </div>
    </div>
  );
}

export default Dashboard;
