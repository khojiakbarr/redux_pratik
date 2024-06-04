import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Store/TodoThunks/TodoThunks";

export default function TodoCard({ id, task }) {
  const dispatch = useDispatch();
  return (
    // line-through
    <div className=" border-purple-600 border-[1px] p-[12px] rounded-[10px] ">
      {<h2 className={`text-center text-[22px] `}>{task}</h2>}
      <div className="flex gap-[10px] w-full">
        <button className="bg-purple-600 py-[5px] px-[10px] w-full  rounded-[10px] mt-[10px] text-white font-[600] ">
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className="bg-purple-600 py-[5px] w-full px-[10px] rounded-[10px] mt-[10px] text-white font-[600] "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
