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

  let randerTask = <h2>No task avalebl</h2>;

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-5 ">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
        </li>
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
      <div className="p-8 bg-slate-200 mx-3 rounded-md">
        <ul>{randerTask}</ul>
      </div>
    </>
  );
};

export default page;
