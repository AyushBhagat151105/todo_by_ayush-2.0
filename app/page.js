"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);

    settitle("");
    setdesc("");
  };

  const deletHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let randerTask = <h2>No task avalebl</h2>;

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="flex items-center justify-between mb-5">
            <div className=" mb-5 w-1/2">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <p className="text-xl mt-2">{t.desc}</p>
            </div>
            <button
              className="px-4 py-2 bg-red-600 rounded-md font-semibold text-white"
              onClick={() => {
                deletHandler(i);
              }}
            >
              Delete
            </button>
          </li>
          <hr />
        </>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl text-center font-semibold">
        Ayush's Todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-xl"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-xl"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button
          className="bg-black text-white px-4 py-2 text-xl rounded-xl font-semibold sm:m-2 m-5"
          onClick={() => {}}
        >
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200 mx-3 rounded-md mt-4">
        <ul>{randerTask}</ul>
      </div>
    </>
  );
};

export default page;
