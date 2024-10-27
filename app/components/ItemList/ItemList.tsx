"use client";
import { Task } from "@/app/interface/task.interface";

type ItemProps = {
  task: Task;
  onDelete: (task: Task) => void;
  onTaskCompleted: (task: Task, completed: boolean) => void;
};

const ItemList = ({
  task,
  onDelete,
  onTaskCompleted,
}: ItemProps): JSX.Element => {
  const removeTask = (): void => {
    onDelete(task);
  };

  const checked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTaskCompleted(task, e.target.checked);
  };

  return (
    <div className="flex px-5 p-2 bg-[#25232C] rounded-[12px] justify-between  w-full mt-[24px] mx-[24px]">
      <div className="flex gap-2 items-center ">
        <input
          type="checkbox"
          defaultChecked={task.completed}
          onChange={checked}
          className="w-[19px] h-[19px] rounded-full cursor-pointer border-[2px] border-[#CAFF00] appearance-none  checked:bg-[#CAFF00] checked:border-transparent transition duration-200"
        />

        <p
          className={
            task.completed
              ? "line-through text-lg font-regular text-[#fff]"
              : "text-lg font-regular text-[#fff]"
          }
        >
          {task.title}
        </p>
      </div>
      <button onClick={removeTask}>❌</button>
    </div>
  );
};

export default ItemList;
