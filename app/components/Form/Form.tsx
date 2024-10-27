"use client";
import { Task } from "@/app/interface/task.interface";
import { SetStateAction, useState } from "react";

let id = 0;

type FormProps = {
  onTaskCreated: (task: Task) => void;
};

const Form = ({ onTaskCreated }: FormProps): JSX.Element => {
  const [inputTitle, setTitle] = useState(" ");

  const createTask = () => {
    const task: Task = {
      title: inputTitle,
      completed: false,
      id,
    };

    id++;

    onTaskCreated(task);
    setTitle("");
  };

  const placeholder = (e: { target: { value: SetStateAction<string> } }) => {
    setTitle(e.target.value);
  };
  return (
    <div className="flex flex-col mt-[24px] gap-5">
      <div className="flex items-center justify-center p-2">
        <h3 className="text-[#B5B7BF] text-2xl font-bold max-xl:text-lg text-center">
          What do you need for your trip 🤔 ?
        </h3>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <input
          type="text"
          placeholder="add list"
          className="rounded-[24px] pl-5 pr-1 py-1 max-w-[300px] w-full text-[#B5B7BF] font-regular text-lg bg-[#25232C] focus:border focus:border-[#CAFF00] focus:outline-none focus:ring-0"
          onChange={placeholder}
          value={inputTitle}
        />
        <button
          onClick={createTask}
          type="submit"
          className="flex cursor-pointer justify-center items-center rounded-[24px] bg-[#CAFF00] p-1 w-[32px] h-[32px] text-2xl font-bold text-[#151515]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Form;
