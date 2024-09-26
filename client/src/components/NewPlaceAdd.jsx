import React from "react";

function NewPlaceAdd() {
  return (
    <div>
      <form action="">
      <h2 className="text-2xl mt-4">Title</h2>
        <input type="text" placeholder="Title" id="title" />
        <h2 className="text-2xl mt-4">Address</h2>
        <input type="text" placeholder="Address" id="address" />
        <h2 className="text-2xl mt-4">Photos</h2>
        <div className="flex gap-2">
            <input type="text" placeholder={'Add using link ....jpg'} />
            <button className="bg-gray-200 px-3 rounded-2xl">Add&nbsp;Photos</button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 ">
          <button className="border bg-transparent rounded-2xl p-8 text-gray-600 text-2xl flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
            UploadFile
          </button>

        </div>
        <h2 className="text-2xl mt-4">Description</h2>
        <textarea name="description" id="description"></textarea>
      </form>
    </div>
  );
}

export default NewPlaceAdd;
