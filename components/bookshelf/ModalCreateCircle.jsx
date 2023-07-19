import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { X } from 'react-bootstrap-icons';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const ModalCreateCircle = ({ setShowModal }) => {
  const { bookCircles, setBookCircles } = useContext(UserContext);

  const [nameInput, setNameInput] = useState();
  const [colorInput, setColorInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookCircles((prev) => [
      ...prev,
      { name: nameInput, color: colorInput, books: [] },
    ]);
  };

  return (
    <div className='fixed inset-0 w-screen h-screen bg-dark-200/20 backdrop-blur-md flex items-center justify-center'>
      <div className='bg-dark-200 rounded-md flex flex-col gap-3 p-5 relative w-[650px]'>
        <button
          className='absolute right-3 top-3'
          onClick={() => setShowModal(false)}
        >
          <X size={28} />
        </button>
        <h2 className='font-semibold text-xl'>Create Circle</h2>
        <div className='flex gap-5'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='flex flex-col flex-1 gap-3'
          >
            <label htmlFor='circleName'>Circle name</label>
            <input
              type='text'
              required
              id='circleName'
              onChange={(e) => setNameInput(e.target.value)}
              className='bg-transparent border-2 rounded-md border-white/50 pl-2 outline-none w-full'
            />
            <div className='flex flex-col gap-2'>
              <HexColorPicker
                style={{
                  width: '100%',
                  height: '160px',
                }}
                color={colorInput}
                onChange={setColorInput}
              />
              <HexColorInput
                style={{
                  background: 'transparent',
                  border: '2px solid #ffffff50',
                  textAlign: 'center',
                  borderRadius: '6px',
                  outline: 'none',
                  textTransform: 'uppercase',
                }}
                color={colorInput}
                onChange={setColorInput}
              />
            </div>
            <button
              className='border-2 border-white/50 rounded-md'
              type='submit'
            >
              Create
            </button>
          </form>
          <div className='flex justify-center flex-col flex-1 gap-3 items-center'>
            <div
              style={{ borderColor: colorInput }}
              className='w-40 h-40 border-[24px] rounded-full'
            ></div>
            <p className='w-40 px-2 border-2 border-white/50 rounded-md text-center h-7 overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {nameInput}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCreateCircle;
