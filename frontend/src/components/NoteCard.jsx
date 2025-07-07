import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const NoteCard = ({ task }) => {
  return (
    <Link
      to={`task/${task._id}`}
      className="block bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border-primary border-t-8"
    >
      <h3 className="text-lg font-semibold text-white mb-2">{task.title}</h3>
      <p className="text-sm text-base-content/80 line-clamp-3">{task.content}</p>

    <div className="flex justify-between items-center mt-4 text-xs text-base-content/60 gap-2">
    <div>
        {new Date(task.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        })}
    </div>

    <div className="flex items-center gap-2">
        <button className="btn btn-ghost btn-xs text-white">
        <PenSquareIcon className="size-4" />
        </button>
        <button className="btn btn-ghost btn-xs text-error">
        <Trash2Icon className="size-4" />
        </button>
    </div>
    </div>

    </Link>
  );
};

export default NoteCard;
