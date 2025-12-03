import React, { useState } from 'react';

const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {modal && (
        <div onClick={() => setModal(false)} className="bg-black/10 fixed inset-0  flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full  max-w-[500px] p-2 rounded-md">
            <div className="text-end">
              <button onClick={() => setModal(false)} className="bg-white h-6 w-6 font-bold rounded-full shadow ">
                X
              </button>
            </div>
            <div className='p-5 font-semibold'>
              <h1 className='text-2xl'>!Hello</h1>
              <p>This is a modal</p>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setModal(true)} className="bg-base-100 px-4 py-2 rounded-md text-2xl  shadow font-bold mr-10 mt-20">
        Open Modal
      </button>
    </div>
  );
};

export default Modal;
