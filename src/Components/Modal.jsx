import React, { useEffect, useState } from 'react';

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  const handlemoda = (p) => {
    setModal(true);
    console.log('puki',p)
 
  };
  return (
    <div>
      {modal && (
        <div onClick={() => setModal(false)} className="bg-black/10 fixed inset-0  flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full  max-w-[500px] p-2 rounded-md max-md:mx-2">
            <div className="text-end">
              <button onClick={() => setModal(false)} className="bg-white h-6 w-6 font-bold rounded-full shadow ">
                X
              </button>
            </div>
            <div className="p-5 font-semibold">
              {/* <h1 className='text-2xl'>!Hello</h1>
              <p>This is a modal</p> */}
              {data.map((s) => (
                <div key={s.name}>
                  <h1 className="text-2xl">Name: {s.name}</h1>
                  <p className="text-2xl">Age: {s.age}</p>
                  <p>Student: {s?.isStudent ? 'Yes' : 'No'}</p>

                  <div className='flex gap-2'>
                    {s.skills.map((skill, i) => (
                   <p key={i}>{skill}</p>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button onClick={() => handlemoda(data)} className="bg-base-100 px-4 py-2 rounded-md text-2xl  shadow font-bold mr-10 mt-20">
        Open Modal
      </button>
    </div>
  );
};

export default Modal;
